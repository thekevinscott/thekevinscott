---
path: "/image-classification-2/"
date: "2019"
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

1. [Download this zip file of images labeled for training](foo.com). *(If you don't feel comfortable downloading a random zip file from the internet, head to Google images and put together your own dataset in compliance [with this document](foo.com).)*
2. Upload the folder labeled train
3. Upload the folder labeled validation

<embed border="1" width="340" height="660" src="https://thekevinscott.github.io/ml-classifier-ui/?SHOW_HELP=0&SHOW_DOWNLOAD=0"></embed>

----

## What's happening

You should have seen a 100% training score, and a close to a 100% validation score. What do these mean? Let's first talk about how you organize your data for training.

We want a model that is good at not only predicting images it's seen before - aka your training set - although, we assume it's good at that - if it's not, that's underfitting - we also want a model that's good at predicting images it hasn't seen before. That's kinda the whole point, right? So in order to measure how good we're doing on that, we keep a number of images separate from the training set, to use to assess how good our model is. This set of images is known as your validation data.

You generally want to split your data into a training set and a validation set. (There are additional splits you can do, like evaluation, or using shuffled parts of the training set, that we won't touch on). The training set is what your model trains on and tries to optimize for. Your validation set is never trained on, but is only used to assess the performance of the model on data it's never seen before.

So, back to the numbers. The first number - the training score - indicates how many images the classifier was able to get right out of the training set. For most use cases, this number should be close to 100%.

The second number - the validation number - indicates how many images the classifier was able to classify. These are images the classifier has not trained on, and this is the number that truly tells you how well your model performs. If your model scores low on both numbers, it's generally said that it is "underfit". Conversely, if you score high on your training data, but low on your validation data, your model is said to be "overfit". More on this later.

Creating a balanced dataset is important, and crucial to a well built model. There's rules of thumbs for training to validation data, but a good rule of thumb is 20% of your dataset should be set aside as validation data.

It's also important that the images in your training set be representative of the images it will see. It's important that the datasets be balanced.

# Transfer Learning

*Caveat - not going super deep into “image” processing, mostly just doing number processing*

At the heart of why it's feasible to train sits something called transfer learning.

Transfer learning is a technique whereby you leverage a model that is already trained, and train it further on your specific problem set.

There is a thing called MobileNet that's real good. Google put it out. Some background on that. It's trained on ImageNet. What is that? I'll tell you what that is.
https://hackernoon.com/creating-insanely-fast-image-classifiers-with-mobilenet-in-tensorflow-f030ce0a2991
https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md

---

This can be a very computationally costly process. For learning images, lots of features are shared across all images. Check out this graphic of edges:

edges

There is a concept called Transfer Learning, whereby you can leverage models that have been trained on vast quantities of data and leverage their conclusions in your own apps. This is what makes it feasible to train in your browser (otherwise, you'd need access to massive GPUs).

This has some limitations. Let's say you want to deal with satellite imagery. Let's say you want to recognize multiple objects at a time. Let's say you want to identify good looking dogs from dumb looking dogs. You won't be able to using Mobilenet.

---


Download this repo and run it locally. Write your code in index.js

First, import tensorflowjs:

```
import * as tf from '@tensorflow/tfjs';
```

Then, set up a function to load mobilenet asynchronously. This will return a promise that resolves to the value of the pretrained model.

```
function loadMobilenet() {
  return tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
}
```

## Setting up a Data Pipeline

When working with neural nets, a [lot of your time will be spent working with data](https://thekevinscott.com/dealing-with-mnist-image-data-in-tensorflowjs/). Setting up a solid pipeline is crucial to a well-functioning model.

For our purposes, we're going to load the images from disk. If you'd like something more dynamic (like the demo above), check out the code in `ml-classifier-ui`, [specifically around handling drag and drop](https://github.com/thekevinscott/ml-classifier-ui/tree/master/src/Dropzone).

For this model, our data consists of two things:

* The images
* The labels that identify the images

There's a few common ways you'll see image data structured:

1) a list of folders, where the folder contains a group of images and the name of the folder is the label
2) all the images in a single folder, where each image has its assoiated label (dog-1, dog-2)
3) the images with their original image name, and a csv or other file with a mapping of label to file

Is there one right way to organize your images? There is not. Because guess what - it's up to you to write the code that translates those images into a format consumable by your model! (A [lot of machine learning code is glue code](https://ai.google/research/pubs/pub43146), as you'll see.)

Import your images:

```
import drum1 from './data/drum-1.jpg';
import drum2 from './data/drum-2.jpg';
import saxophone1 from './data/saxophone-1.jpg';
import saxophone2 from './data/saxophone-2.jpg';
```

We need to load the images prior to getting their pixels values. This function leverages the native browser `Image` object to load the image (if you're in Node, this won't work; check this out). It will return a promise that resolves with a 3D tensor of the image'x pixels. Remember, you can think of a tensor like an array.

```
function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve(tf.fromPixels(img));
    img.onerror = (err) => reject(err);
  });
}
```

Once we have each image loaded, we'll need to crop it so that it's square.

Most images in ML models are square. To deal with images that aren't square, you generally crop them. To get around the issue of losing information on the edges of your images, you can do data augmentation. We'll talk about that later.

### Cropping

```
function cropImage(img) {
  const width = img.shape[0];
  const height = img.shape[1];

  // use the shorter side as the crop size
  const shorterSide = Math.min(img.shape[0], img.shape[1]);

  // calculate beginning and ending crop points
  const startingHeight = (height - shorterSide) / 2;
  const startingWidth = (width - shorterSide) / 2;
  const endingHeight = startingHeight + shorterSide;
  const endingWidth = startingWidth + shorterSide;

  // return image data cropped to those points
  return img.slice([startingWidth, startingHeight, 0], [endingWidth, endingHeight, 3]);
}
```

From there, we need to resize it to be 224.

MobileNet expects images of dimension 224x224. How do I know that? I dunno.

So your image dataset is going to look like `[null,224,224,3]`. That 3 on the end represents RGB, the color pixel values of the image. Sometimes you can get away by transforming your images into grayscale if we want our model to be even more performant. It depends on your use case.

Luckily, Tensorflow.js provides a resize method out of the box!

```
function resizeImage(image) {
  return tf.image.resizeBilinear(image, [224, 224]);
}
```

The final step of our data pipeline is converting the pixels into a format Tensorflow can process.

We first increase the dimensions of the tensor. We do this so we can later create a single tensor out of all our images; for now, that first dimension is this. So we go from this shape:

[224,224,3]

To this:

[1,224,224,3]

We then cast our pixel data to a float, and turn the values from a pixel between 0-255, to a floating value between -1 and 1.

While neural networks are mostly agnostic to the type of numbers coming in, smaller numbers train faster given how networks are initialized. Can I provide a reference for this?

```
function batchImage(image) {
  // Expand our tensor to have an additional dimension, whose size is 1
  const batchedImage = image.expandDims(0);

  // Turn pixel data into a float between -1 and 1.
  return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
}
```

Let's put it all together:

```
function loadAndProcessImage(image) {
  const croppedImage = cropImage(image);
  const resizedImage = resizeImage(croppedImage);
  const batchedImage = batchImage(resizedImage);
  return batchedImage;
}
```

Viola! We've now got a function that transforms an incoming image.

Let's make a prediction with MobileNet and see what comes back. Note the `print` statement - that's a TFJS thing.

```
loadMobilenet().then(pretrainedModel => {
  loadImage(drum1).then(img => {
    const processedImage = loadAndProcessImage(img);
    console.log(processedImage);
    const prediction = pretrainedModel.predict(processedImage);
    prediction.print();
  });
});
```

In your console, you'll probably see something like:

```Tensor
     [[0.0000273, 5e-7, 4e-7, ..., 0.0001365, 0.0001604, 0.0003134],]
```

If we inspect the shape of this tensor, we'll see it to be `[1, 1000]`. The model returns a tensor containing a prediction for every class available, and there are a 1000 of them, and it's a single prediction but for every class.

In order to translate that into an actual class, we'll first need to grok what the top prediction is.

This bit of code first flattens the tensor to a 1 dimensional array, and then pulls off the maximum argument, which is our most confident prediction.

```
prediction.as1D().argMax().print();
```

This should product:

```Tensor
    541
```

If we [go to the ImageNet class definitions](https://gist.github.com/thekevinscott/e6fb765d5125dd3c34f11d2d67b6d49b) (which MobileNet is trained on), we see that 541 corresponds to `drum, membranophone, tympan`, which is exactly the image we used. Awesome!

So, congratulations! You're now doing image classification in Javascript.

We could stop right there, and simply leverage MobileNet's predictions to build an application, and bucket the predictions ourselves. But you didn't come this far to not do any machine learning, right? So let's do some!

# Our Model
Labels get turned into numbers via a process called one hot encoding. Let's say you've got 3 different categories: "raspberry", "blueberry", "strawberry". Those labels will become:

So you've got an array (also known as a tensor) of labels corresponding to your images, and you've got an array of images. You'll then need to convert that rich data into data the model can understand, which is numbers.

```
raspberry  - [1, 0, 0]
blueberry  - [0, 1, 0]
strawberry - [0, 0, 1]
```






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

## Layering onto pretrained models

There's two ways to work with a pretrained model. You can either activate the image, and feed the prediction into a brand new model that we build, or you can add a layer onto the original mobilenet. CAN YOU?

We're going to take the first approach because it's simpler to explain.

But first, let's talk about what how neural nets work.

## Neural Nets

I'm going to stay focused on the bare minimum needed to get an image classifier up and running. There are lots of tutorials that go much deeper than this.

First, a unit, or a neuron.

Then, a layer. A layer has a particular shape, an input shape and an output shape.

A layer has a particular activation. You can think of this as a transformation applied to a number as the final step.

An optimizer is how to optimize to minimize the loss.

Finally, we compile the model, and then fit it.

## Training

What happens during training?

The network is randomly initialized with some set of weights, based on the architecture you defined above. It then runs your images through the model, and makes prediction for each image.

These predictions, as you can probably guess, will be largely wrong. They could be wrong 50% of the time, or more or less.

What's important is we can measure the difference between the predictions and the labels, and we refer to this number as the "loss". Loss is a number that measures the difference.

Another name for prediction is "forward propagation". Once you have your loss, you can calculate how to improve; this is called back propagation. This is then multiplied by a learning rate. This is then used to update the weights in the model.

Each cycle through your entire image set is called an epoch.

You can do something called mini batch where instead of training on the whole sample set, you train on samples of your training data. This is generally faster and more performant and results in better results at the cost of more training code.

How many epochs should you run for? Until it's good, or it's clear it's not working, or you run out of time.

*We want to shuffle the images so that it doesn't learn the order of pixels and try to predict on that.*
*This codes sets up a model that accepts images and labels. It will console log out the loss every epoch. Also note the shuffling - we want to shuffle our training data after every epoch, in order to avoid blah blah.*

12. So you get back your results as numbers. you then translate these into your classes, right?

# Conclusion

To recap, you have learned the basics of how a neural net works, how to set up a data pipeline for loading and transforming images, and how to train your net and translate numerical predictions into human readable strings. Good job!

It's important to also note that training on images from scratch is a more intense process that we didn't really touch on here. You would almost certainly want to avoid training from scratch in a browser, because it would take months, and nobody's got time for that. However, if you're in Node, it's absolutely viable to do so.
