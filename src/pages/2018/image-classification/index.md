---
path: "/image-classification/"
title: "Image Classification"
image: "cover.jpg"
image_credit: "Photo by <a href='https://unsplash.com/photos/vWI1kTcMcDI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Alex Block</a> on <a href='https://unsplash.com'>Unsplash</a>"
tags: ["image classification", "imagenet", "mobilenet", "artificial intelligence", "deep learning", "machine learning", "tensorflow.js"]
---

There are so many diets out there. We're going to build a tool that can categorize images of food into certain groups. You could then build a mobile app that tells you whether a particular food falls into your diet or not.

Image classification is the practice of teaching a machine to categorize a set of images into different categories, so that future images can be categorized automatically. It's used all over the place. It's even used in places you wouldn't expect, like heat maps for fraud detection, or analyzing the Fourier transforms of audio waves.

We're going to cover how to build a model that can classify categories of images, and we're going to build it in Javascript.

# Demo

Let's see an example of this in action!

1. [Download this zip file of images labeled for training](foo.com). *(If you don't feel comfortable downloading a random zip file from the internet, head to Google images and put together your own dataset in compliance with this document.)*
2. Upload the folder labeled train
3. Upload the folder labeled validation

<embed border="1" width="340" height="660" src="https://thekevinscott.github.io/ml-classifier-ui/?SHOW_HELP=0"></embed>

----

To confirm your model is actually trained, go find some other images of cats and dogs, upload them, and see whether it's able to accurately classify your images.

## Next section

So, we saw how image classification works in practice. Let's talk about how it works.

The first number - the training number - indicates how many images the classifier was able to get right out of the training set. For most use cases, this number should be close to 100%.

The second number - the validation number - indicates how many images the classifier was able to classify. These are images the classifier has not trained on, and this is the number that truly tells you how well your model performs. If your model scores low on both numbers, it's generally said that it is "underfit". Conversely, if you score high on your training data, but low on your validation data, your model is said to be "overfit". More on this later.

Let's talk data.

## Data

Every machine learning problem starts with data. Data is inseparable from AI, and yet working with it does not really feel like AI. yet it's probably what you'll spend the most time on.

When doing image classification, our data consists of two things:

* The images
* The labels that identify the images

There's a few common ways you'll see image data structured:

1) a list of folders, where the folder contains a group of images and the name of the folder is the label
2) all the images in a single folder, where each image has its assoiated label (dog-1, dog-2)
3) the images with their original image name, and a csv or other file with a mapping of label to file

Is there one right way to organize your images? There is not. Because guess what - it's up to you to write the code that translates those images into a format consumable by your model! (A [lot of machine learning code is glue code](https://ai.google/research/pubs/pub43146), as you'll see.)

So you've got an array (also known as a tensor) of labels corresponding to your images, and you've got an array of images. You'll then need to convert that rich data into data the model can understand, which is numbers.

Labels get turned into numbers via a process called one hot encoding. Let's say you've got 3 different categories: "raspberry", "blueberry", "strawberry". Those labels will become:

```
raspberry  - [1, 0, 0]
blueberry  - [0, 1, 0]
strawberry - [0, 0, 1]
```

Images on the other hand, will be transformed depending on what your model looks like.

In our example above, we're leveraging something called Mobilenet. (We'll talk about transfer learning later). Mobilenet is trained on 224x224 images.

Most images in ML models are square. To deal with images that aren't square, you generally crop them. To get around the issue of losing information on the edges of your images, you can do data augmentation. We'll talk about that later.

So your image dataset is going to look like `[null,224,224,3]`. That 3 on the end represents RGB, the color pixel values of the image. Sometimes you can get away by transforming your images into grayscale if we want our model to be even more performant. It depends on your use case.

*Some good sources of images are imagenet. Kaggle datasets will offer specific types of images. You can download images via imagenet here.*

## Next

Let's talk about the model itself.

So we get this big array of images. We then want to feed it into `.fit`. We want to shuffle the images so that it doesn't learn the order of pixels and try to predict on that.

Every cycle will cover all of the images in your training set. This is called a single epoch. You can do something called mini batch where instead of training on the whole sample set, you train on samples of your training data. This is generally faster and more performant and results in better results at the cost of more training code.

How many epochs should you run for? Until it's good, or it's clear it's not working, or you run out of time. 

So at a low level, what the machine does is initialize a bunch of weights randomly. It then runs an image through the model, and makes a prediction. The set of predictions over all your images, minus the accuracy - this is called loss. This number is not in units or anything, it's just a calculation of how wrong you are.

The model then tries to minimize this loss by calculating the difference between the predictions it made - the randomized weights - and the actual labels, and minutely updates those weights in the direction of the correct labels by some amount called the learning rate.

You do this enough times and you begin to get something that learns!

## Transfer Learning

This can be a very computationally costly process. For learning images, lots of features are shared across all images. Check out this graphic of edges:

edges

There is a concept called Transfer Learning, whereby you can leverage models that have been trained on vast quantities of data and leverage their conclusions in your own apps. This is what makes it feasible to train in your browser (otherwise, you'd need access to massive GPUs).

This has some limitations. Let's say you want to deal with satellite imagery. Let's say you want to recognize multiple objects at a time. Let's say you want to identify good looking dogs from dumb looking dogs. You won't be able to using Mobilenet.

# Code

Let's start writing some code! We're going to use parcel as our bundler. [Clone this repo](https://github.com/thekevinscott/tfjs-image-classifier-example), run `yarn`, and start it:

```
// from the command line
yarn develop
```

Open up [localhost:1234](http://localhost:1234) to see your code. You should see "hello world" in the console.

Let's next import tensorflowjs:

```
// in index.js
import * as tf from '@tensorflow/tfjs';
```

Import your images:

```
import drum1 from './data/drum-1.jpg';
import drum2 from './data/drum-2.jpg';
import saxophone1 from './data/saxophone-1.jpg';
import saxophone2 from './data/saxophone-2.jpg';

const images = [
  drum1,
  drum2,
  saxophone1,
  saxophone2,
];

const labels = [
  'drum',
  'drum',
  'saxophone',
  'saxophone',
];
```

We need to load the images prior to getting their pixels values. This function leverages the native browser `Image` object to load the image (if you're in Node, this won't work; check this out).

This will also crop and resize the image.

```
const loadImage = src => new Promise((resolve, reject) => {
  const img = new Image();
  img.src = src;
  img.onload = () => resolve(img);
  img.onerror = (err) => reject(err);
});

const crop = (img) => {
  const size = Math.min(img.shape[0], img.shape[1]);
  const centerHeight = img.shape[0] / 2;
  const beginHeight = centerHeight - (size / 2);
  const centerWidth = img.shape[1] / 2;
  const beginWidth = centerWidth - (size / 2);
  return img.slice([beginHeight, beginWidth, 0], [size, size, 3]);
}

const futzImage = img => {
  const pixels = tf.fromPixels(img);
  const croppedImg = crop(pixels);
  const resizedImage = tf.image.resizeBilinear(croppedImg, [224, 224]);
  const somethingImage = resizedImage.expandDims(0).toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
  return somethingImage;
};

Promise.all(images.map(image => loadImage(image))).then(loadedImages => {
  return loadedImages;
}).then(loadedImages => {
  // here are the Images from above
  return loadedImages.slice(1).reduce((data, image) => {
    return data.concat(futzImage(image));
  }, futzImage(loadedImages[0]));
}).then(images => {
  console.log('images', images);
});
```

Let's refactor the above to split these into various things.

*Note: there's ways to optimize your code so as not to have tensors uncollected. We're not handling that here for simplicity sake*.



We also need the labels one hot encoded:

```
const oneHot = (label, classes) => {
  return tf.oneHot(tf.tensor1d([label === 'drum' ? 0 : 1]).toInt(), classes);
};

const classes = 2;

const tfLabels = labels.slice(1).reduce((data, label) => {
  return data.concat(oneHot(label, classes));
}, oneHot(labels[0], classes));
```

You will need to convert your labels from strings into numbers.

Then, let's load Mobilenet, our pre-trained model:

```
const model = await tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
```

So then let's get a model that's built on top of mobilenet:

```
const layer = model.getLayer('conv_pw_13_relu');
const duhModel = tf.model({
  inputs: [model.inputs[0]],
  outputs: layer.output,
});
```

Next let's build our model

```
const model = tf.sequential({
  layers: [
    tf.layers.flatten({inputShape: [7, 7, 256]}),
    tf.layers.dense({
      units: 100,
      activation: 'relu',
      kernelInitializer: 'varianceScaling',
      useBias: true
    }),
    tf.layers.dense({
      units: classes,
      kernelInitializer: 'varianceScaling',
      useBias: false,
      activation: 'softmax'
    })
  ],
});

const optimizer = tf.train.adam(0.0001);

model.compile({
  optimizer,
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});
```

This codes sets up a model that accepts images and labels. It will console log out the loss every epoch. Also note the shuffling - we want to shuffle our training data after every epoch, in order to avoid blah blah.

Ok! Now we have a trained model. Seems like it did pretty good! That is based on the loss coming out of the logs.

But how will it do on images it's never seen before?

```
load the validation images
run them through
buh boom
```

Holy smokes! It did great!
