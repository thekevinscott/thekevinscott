---
path: "/image-classification-in-javascript/"
date: "2018-08-15 10:00:00.000 EST"
title: "Image Classification in the Browser with Javascript"
image: "cover.jpg"
image_credit: "Photo by <a href='https://unsplash.com/photos/vWI1kTcMcDI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Alex Block</a> on <a href='https://unsplash.com'>Unsplash</a>"
tags: ["image classification", "artificial intelligence", "javascript", "imagenet", "mobilenet", "deep learning", "machine learning", "tensorflow.js"]
description: "I recently build an open source tool to quickly train image classification models in your browser, and I'd like to talk about how it works and how to build your own in Javascript."

---

A lot of folks think you need tons of data and hours of GPU time to build a good image classifier. Nowadays, with a handful of labeled images, you can get a pretty accurate model trained in your browser in 30 seconds.

At the heart of this ability is transfer learning, the ability to leverage pretrained models and just training the last layer. This article will walk through how to build an image classifier in Javascript.

---

# Image Classification

Teaching a machine to predict categories of images has a wide range of applications. You might have seen image classification at work in your photo app, automatically suggesting friends or locations for tagging. From medical images to self driving cars to satellite imagery, even beyond the realm of images  analyzing heat maps of user activity on a website or the Fourier transforms of audio waves, image classification has a wide array of uses.

I recently [released an open source tool](https://thekevinscott.github.io/ml-classifier) to quickly train image classification models in your browser. Let's seea demo of this. The dataset we'll use has 10 images from each of the three most popular searches on [https://pexels.com](https://pexels.com) : Mobile", "Wood", and "Notebook".

**[You can download the dataset here](https://github.com/thekevinscott/dataset-tutorial-for-image-classification/data)**. Drag the **train** folder into the drop zone, and once the model is trained, upload the **validation** folder to see how well your model can classify novel images.

<embed border="1" width="340" height="660" src="https://thekevinscott.github.io/ml-classifier-ui/?SHOW_HELP=0&SHOW_DOWNLOAD=0"></embed>
<capt>Alternatively, [you can watch a gif](https://github.com/thekevinscott/dataset-tutorial-for-image-classification).</capt>

## How does this work? I thought I needed big GPUs to do machine learning?

Traditionally, machine learning has been a computation-intensive task, performed on servers with access to powerful GPUs able to parallelize massive amounts of calculations, and consuming gigabytes of datasets.

Recently, pretrained models have been produced that are trained on existing broad datasets. This is called Transfer Learning and is the special sauce that makes machine learning in the browser feasible. You download a pretrained model for your use case, and tune the model's final layers to train them on your specific use case.

The reason this works so well is that many features of images are fundamental to visual perception in general. Rob Fergus and Matthew Zeiler [demonstrate in their paper](https://arxiv.org/abs/1311.2901) the first layers of a model:

![Low Level Features](images/layer-1.png "Low Level Features")

The model is beginning to recognize generic features, including lines, circles, and shapes, that are applicable to any set of images. After a few more layers, it's able to recognize more complex shapes like edges and words:

![Higher Level Features](images/layer-4.png "Higher Level Features")

Since many images share features such as lines and circles (and many share higher level features, like "eye" or "nose") it's feasible to just train the last few layers on your specific dataset, a process that is much faster and requires less training data than a full training from scratch.

How much less data? It depends on the complexity and variability of your data, but with the example above I got to 100% accuracy with 30 images. For something like dogs and cats, just a handful of images is enough to get good results. Much depends on your dataset, but it's probably less than you think.

<embed border="0" height="315" src="https://www.youtube.com/embed/AgkfIQ4IGaM" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="1"></embed>

# Show me the Code!

Let's look at how to build an image classifier with Javascript. [I've set up a repo with the necessary packages](https://github.com/thekevinscott/dataset-tutorial-for-image-classification) to get you going. Clone it and follow the readme instructions to install the packages and run it.

We'll use [MobileNet](https://github.com/tensorflow/models/blob/master/research/slim/nets/mobilenet_v1.md), a pretrained model produced by Google.

> MobileNets are a class of convolutional neural network designed by researches at Google. They are coined “mobile-first” in that they’re architected from the ground up to be resource-friendly and run quickly, right on your phone. &mdash; [Matt Harvey](https://hackernoon.com/creating-insanely-fast-image-classifiers-with-mobilenet-in-tensorflow-f030ce0a2991)

MobileNet is trained on a huge corpus of images called [ImageNet](http://www.image-net.org/), containing over 14 million labeled images belonging to a 1000 different categories.

If you download `mobilenet_v1_0.25_224`, you'll see a structure of files like:

```
mobilenet_v1_0.25_224.ckpt.data-00000-of-00001
mobilenet_v1_0.25_224.ckpt.index
mobilenet_v1_0.25_224.ckpt.meta
mobilenet_v1_0.25_224.tflite
mobilenet_v1_0.25_224_eval.pbtxt
mobilenet_v1_0.25_224_frozen.pb
mobilenet_v1_0.25_224_info.txt
```

Within `mobilenet_v1_0.25_224_eval.pbtxt`, note the `shape` attribute:

```
  attr {
    key: "shape"
    value {
      shape {
        dim {
          size: -1
        }
        dim {
          size: 224
        }
        dim {
          size: 224
        }
        dim {
          size: 3
        }
      }
    }
  }
```

This tells us that the first layer of this MobileNet expects to receive a Tensor of Rank 4 with dimensions `[any, 224, 224, 3]`. (If you're wondering what a Tensor is, [check out this article first](/tensors-in-javascript/).)

## Importing and Setup

In `index.js`, start by importing `tensorflowjs`:

```
import * as tf from '@tensorflow/tfjs';
```

Tensorflow provides function to load pretrained model asynchronously. This function will return a Promise resolving with the pretrained model.

```
function loadMobilenet() {
  return tf.loadModel('https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json');
}
```

(If you decide to use a different pretrained model, be sure to alter the appropriate shape and layer attributes.)

![Rube Goldberg Machine](images/goldberg.gif)

## Data Pipelines

At the heart of your machine learning model is data. Building a solid pipeline for processing your data is crucial for a solid training process. A [lot of your time will be spent working with data](https://thekevinscott.com/dealing-with-mnist-image-data-in-tensorflowjs/), so it pays to get comfortable with the process.

> It may be surprising to the academic community to know that only a tiny fraction of the code in many machine learning systems is actually doing “machine learning”. When we recognize that a mature system might end up being (at most) 5% machine learning code and (at least) 95% glue code, reimplementation rather than reuse of a clumsy API looks like a much better strategy. &mdash; [D. Sculley et all](https://ai.google/research/pubs/pub43146)

Our data consists of two things:

* The images
* The labels that identify the images

There's a few common ways you'll see image data structured:

1) a list of folders, where the folder contains a group of images and the name of the folder is the label
2) all the images in a single folder, where each image has its associated label (dog-1, dog-2)
3) the images with their original image name, and a csv or other file with a mapping of label to file

There's no right way to organize your images; choose whatever format makes sense for you and your team. The data provided in the repo uses the first structure.

The data processing pipeline will consist of four parts:

1. Load the data and extract the pixels into a Tensor
2. Crop the image
3. Resize the image
4. Translate the Tensor into an appropriate input format

### 1. Loading the Image

Since our machine learning model will expect Tensors, the first step is to load the image and translate its pixel data into a Tensor. Browsers provide many convenient tools to load images and read pixels, and Tensorflow.js provides a function to convert an `Image` object into a Tensor. (If you're in Node, you'll have to handle this yourself).

This function will take a `src` URL of the image, load the image using native browser functionality, and resolve the promise with a 3D Tensor of shape `[width, height, color_channels]`:

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

### 2. Cropping the Image

Many classifiers expect square images. This is not a strict requirement; if you build your own model you can specify any size resolution you want. However, standard CNN architectures expect that images be of a **fixed size**. Given this necessity, most pretrained models expect squares to support the highest range of ratios. Squares also provide the most flexibility in handling a variety of [data augmentation techniques](https://medium.com/ymedialabs-innovation/data-augmentation-techniques-in-cnn-using-tensorflow-371ae43d5be9).

We determined above that MobileNet expects 224x224 square images, so we'll need to first crop our images. We do that by chopping off the edges of the longer side:

```
function cropImage(img) {
  const width = img.shape[0];
  const height = img.shape[1];

  // use the shorter side as the size to which we will crop
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

### 3. Resizing the image

Now that our image is square, we can resize it to 224x224. This part is easy: Tensorflow.js provides a resize method out of the box:

```
function resizeImage(image) {
  return tf.image.resizeBilinear(image, [224, 224]);
}
```

### 4. Translate the Tensor

Recall that our model expects an input object of the shape `[any, 224, 224, 3]`. This is known as a Tensor of Rank 4. This dimension refers to the number of training examples. If you have 10 training examples, that would be `[10, 224, 224, 3]`.

We also want our pixel data as a floating point number between -1 and 1, instead of integer data between 0 and 255, a process called normalization. While [neural networks are generally agnostic to the size](https://stackoverflow.com/questions/4674623/why-do-we-have-to-normalize-the-input-for-an-artificial-neural-network
) of the numbers coming in, using smaller numbers helps the network train faster. ([Check out the Coursera course on this to learn more](https://www.coursera.org/lecture/deep-neural-network/normalizing-inputs-lXv6U
)).

We can build a function that expands our tensor to rank 4 and translates the integers into floats with:

```
function batchImage(image) {
  // Expand our tensor to have an additional dimension, whose size is 1
  const batchedImage = image.expandDims(0);

  // Turn pixel data into a float between -1 and 1.
  return batchedImage.toFloat().div(tf.scalar(127)).sub(tf.scalar(1));
}
```

Putting all the above functions together into a single data pipeline looks like:

```
function loadAndProcessImage(image) {
  const croppedImage = cropImage(image);
  const resizedImage = resizeImage(croppedImage);
  const batchedImage = batchImage(resizedImage);
  return batchedImage;
}
```

We can now use this function to test that our pretrained model is capable of returning a prediction. To test, let's use an image from ImageNet whose label we know:

```
import drum from './data/pretrained-model-data/drum.jpg';
loadMobilenet().then(pretrainedModel => {
  loadImage(drum).then(img => {
    const processedImage = loadAndProcessImage(img);
    const prediction = pretrainedModel.predict(processedImage);
    prediction.print();
  });
});
```

(Because of the way Tensorflow.js works, [you must call `print`](https://js.tensorflow.org/api/0.12.0/#print) on a Tensor instead of `console.log`.)

You should see something like:

```Tensor
     [[0.0000273, 5e-7, 4e-7, ..., 0.0001365, 0.0001604, 0.0003134],]
```

If we inspect the shape of this Tensor, we'll see it to be `[1, 1000]`. The model returns a Tensor containing a prediction for every category, and since MobileNet contains 1000 classes, we receive 1000 predictions, each representing the probability that the given image belongs to a given class.

In order to get an actual prediction, we first need to determine the most likely prediction. We can flatten the tensor to 1 dimension, and then get the maximum, which will correspond to our most confident prediction:

```
prediction.as1D().argMax().print();
```

This should produce:

```Tensor
    541
```

In the repo you'll find a copy of the ImageNet class definitions in JSON format ([forked from here](https://gist.github.com/thekevinscott/e6fb765d5125dd3c34f11d2d67b6d49b)). You can import that JSON file to translate the numeric prediction into an actual string.

```
import labels from './imagenet_labels.json';

loadMobilenet().then(pretrainedModel => {
  ...
  const labelPrediction = prediction.as1D().argMax().dataSync()[0];
  console.log(`
    Numeric prediction is ${labelPrediction}
    The predicted label is ${labels[labelPrediction]}
    The actual label is drum, membranophone, tympan
  `);
});
```

You should see that `541` corresponds to `drum, membranophone, tympan`, which is exactly the image we used. This means your data pipeline is up and running, and MobileNet is successfully predicting incoming images!

Now that we've got a data pipeline set up, let's look at how to tune MobileNet on your specific image problems.

![You get a monorail!](images/monorail-2.gif "You get a monorail")

## Training The Model

The goal of any machine learning project is to build a model that successfully predicts novel data; data it hasn't seen before. (It wouldn't do any good to build a model to only recognize data it HAS seen before; you could just hardcode that, no machine learning required!)

In order to do this, you train the model on labeled data - data that has already been identified as either a cat or a dog - and you validate the model's performance on other labeled data *that it hasn't seen before*. (There are other areas of machine learning that don't require labeled data but that's outside this article's scope.)

> Supervised learning reverses this process, solving for m and b, given a set of x’s and y’s. In supervised learning, you start with many particulars — the data — and infer the general equation. And the learning part means you can update the equation as you see more x’s and y’s, changing the slope of the line to better fit the data. The equation almost never identifies the relationship between each x and y with 100% accuracy, but the generalization is powerful because later on you can use it to do algebra on new data.
https://hbr.org/2017/10/how-to-spot-a-machine-learning-opportunity-even-if-you-arent-a-data-scientist

That second set of data - data that it hasn't seen before - serves as a proxy for the real world, with the only difference being that we know what it *should be*, and we can use it to gauge the performance of our model. We call this data our *validation dataset*. (Or Evaluation data?)

The data we use to train our model is predictably called our *training dataset*.

When you trained the model above by dragging the `training` folder in, it output a training score. This indicates how many images the classifier was able to learn to successfully predict.

The second number is the validation number; this indicates how many images were successfully predicted that it *hadn't seen before*. This is the score you want to optimize for. A good rule of thumb to optimize that number is to throw more data at it. Another good approach is to look at the type of data you're supplying; if your training set only contains high resolution, well lit dog photos, but your validation set has pixelated low light photos, you're gonna struggle to realize performance in
the real world.

There's literal books written on how to optimize your machine learning models. You can find some examples here. However, *hopefully* you will get a good score out of the gate, thanks to the wonders of transfer learning.

In the repo, you'll find a folder `data/colors` that contains:

```
validation/
  blue/
    blue-3.png
  red/
    red-3.png
training/
  blue/
    blue-1.png
    blue-2.png
  red/
    red-1.png
    red-2.png
```

Something I've found is that, when something goes wrong with training, it can be very difficult to know where the bug is coming from. For this reason, it's helpful to test every part of the process and validate assumptions along the way.

The solid red and blue colors in this dataset are guaranteed to provide accurate results if the code is set up correctly, so we'll use these to validate that our model is built correctly.

```
import blue1 from '../data/colors/training/blue/blue-1.png';
import blue2 from '../data/colors/training/blue/blue-2.png';
import blue3 from '../data/colors/validation/blue/blue-3.png';
import red1 from '../data/colors/training/red/red-1.png';
import red2 from '../data/colors/training/red/red-2.png';
import red3 from '../data/colors/validation/red/red-3.png';

const training = [
  blue1,
  blue2,
  red1,
  red2,
];

const labels = [
  'blue',
  'blue',
  'red',
  'red',
];
```

We'll want to use the majority of the pretrained model, but without the final layers that classify into the 1000 categories. You can inspect a pretrained model with `.summary()`:

```
loadMobilenet().then(mobilenet => {
  mobilenet.summary();
});
```

The end of the summary should look something like this:

```
conv_dw_13_bn (BatchNormaliz [null,7,7,256]            1024      
_________________________________________________________________
conv_dw_13_relu (Activation) [null,7,7,256]            0         
_________________________________________________________________
conv_pw_13 (Conv2D)          [null,7,7,256]            65536     
_________________________________________________________________
conv_pw_13_bn (BatchNormaliz [null,7,7,256]            1024      
_________________________________________________________________
conv_pw_13_relu (Activation) [null,7,7,256]            0         
_________________________________________________________________
global_average_pooling2d_1 ( [null,256]                0         
_________________________________________________________________
reshape_1 (Reshape)          [null,1,1,256]            0         
_________________________________________________________________
dropout (Dropout)            [null,1,1,256]            0         
_________________________________________________________________
conv_preds (Conv2D)          [null,1,1,1000]           257000    
_________________________________________________________________
act_softmax (Activation)     [null,1,1,1000]           0         
_________________________________________________________________
reshape_2 (Reshape)          [null,1000]               0         
=================================================================
Total params: 475544
Trainable params: 470072
Non-trainable params: 5472
_________________________________________________________________
```

The final activation layer (not including the softmax) is `conv_pw_13_relu`, so we'll include all the layers up to that:

```
function buildPretrainedModel() {
  return loadMobilenet().then(mobilenet => {
    const layer = mobilenet.getLayer('conv_pw_13_relu');
    return tf.model({inputs: mobilenet.inputs, outputs: layer.output});
  });
}
```

Let's write a function to loop through all images and return a Promise that resolves when they are all loaded.

```
function loadImages(images, pretrainedModel) {
  let promise = Promise.resolve();
  for (let i = 0; i < images.length; i++) {
    const image = images[i];
    promise = promise.then(data => {
      return loadImage(image).then(loadedImage => {
        return tf.tidy(() => {
          const processedImage = loadAndProcessImage(loadedImage, pretrainedModel);
          if (data) {
            const newData = data.concat(processedImage);
            data.dispose();
            return newData;
          }

          return tf.keep(processedImage);
        });
      });
    });
  }

  return promise;
}
```

We build a sequential promise that iterates over each image and processes it. Alternatively, you can use `Promise.all` to handle this in parallel, but you have to be careful of how you handle UI performance.

*Speaking of performance, note the use of `tf.tidy` and `.dispose()`. These are two memory management functions that Tensorflow.js exposes; [you can learn more here](https://js.tensorflow.org/tutorials/core-concepts.html). Handling memory management is crucial for building a performant machine learning model in a browser.*

You can put all this together with:

```
buildPretrainedModel().then(pretrainedModel => {
  loadImages(training, pretrainedModel).then(xs => {
    ...
  })
});
```

Calling your data "x" and "y" is [a convention in the machine learning world](https://datascience.stackexchange.com/questions/17598/why-are-variables-of-train-and-test-data-defined-using-the-capital-letter-in-py), carrying over from its mathematical origins.

### Labels

Next, you'll need to convert your labels into numbers. However, it's not as simple as assigning a number to each category. Let's say you're workign with three categories of fruit:

```
raspberry - 0
blueberry - 1
strawberry - 2
```

The problem with using numbers like this is that they can imply a relationship between these numbers. Technically, these would be known as "ordinal" values, in that they have some order.

The real world consequences of this might be that the network learns that something halfway between a raspberry and a strawberry is a blueberry, or that a strawberry is the "best" of the berries.

To prevent these incorrect assumptions we use a process called "one hot encoding". One hot encoding produces data structures that look like:

```
raspberry  - [1, 0, 0]
blueberry  - [0, 1, 0]
strawberry - [0, 0, 1]
```

Two great articles explaining this are [here](https://hackernoon.com/what-is-one-hot-encoding-why-and-when-do-you-have-to-use-it-e3c6186d008f) and [here](https://machinelearningmastery.com/why-one-hot-encode-data-in-machine-learning/).

For our color data, we can leverage Tensorflow.js's built in one hot functions to translate our labels:

```
function oneHot(labelIndex, classLength) {
  return tf.tidy(() => tf.oneHot(tf.tensor1d([labelIndex]).toInt(), classLength));
};
```

This function takes a particular number (`labelIndex`, corresponding to a label) and translates it to a one hot encoding, given some number of classes (`classLength`).

We can use the function with the following bit of code, that first builds a mapping of numbers-to-labels off the incoming array of labels, and then builds a Tensor containing those one-hot encoded labels:

```
function getLabelsAsObject(labels) {
  let labelObject = {};
  for (let i = 0; i < labels.length; i++) {
    const label = labels[i];
    if (labelObject[label] === undefined) {
      // only assign it if we haven't seen it before
      labelObject[label] = Object.keys(labelObject).length;
    }
  }
  return labelObject;
}

function addLabels(labels) {
  return tf.tidy(() => {
    const classes = getLabelsAsObject(labels);
    console.log(classes);
    const classLength = Object.keys(classes).length;

    let ys;
    for (let i = 0; i < labels.length; i++) {
      const label = labels[i];
      const labelIndex = classes[label];
      console.log(label, labelIndex);
      const y = oneHot(labelIndex, classLength);
      if (i === 0) {
        ys = y;
      } else {
        ys = ys.concat(y, 0);
      }
    }
    return ys;
  });
};
```

Now that we have our data, we can build our model. We build a second model that accepts as input the activated images from our pretrained model. Therefore, the first layer matches the shape of the output layer from MobileNet.

      // Flattens the input to a vector so we can use it in a dense layer. While
      // technically a layer, this only performs a reshape (and has no training
      // parameters).

The intermediate layer is `relu`. Relu is a common activation function. The number of units can be up to you. Try changing it and see what your performance is like!

We end with a [Softmax layer](https://en.wikipedia.org/wiki/Softmax_function), which is a common activation for classification problems, with the number of units matching our expected number of classes.

Finally, we use an adam optimizer with a fairly low learning rate, and a loss of categorical crossentropy.

```
function getModel(numberOfClasses) {
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
        units: numberOfClasses,
        kernelInitializer: 'varianceScaling',
        useBias: false,
        activation: 'softmax'
      })
    ],
  });

  model.compile({
    optimizer: tf.train.adam(0.0001),
    loss: 'categoricalCrossentropy',
    metrics: ['accuracy'],
  });

  return model;
}
```

Finally, we train the actual model. We're passing `epochs` and `shuffle` to our model. We shuffle our training images so that the model doesn't learn the order of incoming pixels. An `epoch` denotes one cycle through your entire training set. How many epochs should you run for? [Until it's good, or it's clear it's not working, or you run out of time.](https://towardsdatascience.com/epoch-vs-iterations-vs-batch-size-4dfb9c7ce9c9).

```
function makePrediction(pretrainedModel, image, expectedLabel) {
  loadImage(image).then(loadedImage => {
    return loadAndProcessImage(loadedImage, pretrainedModel);
  }).then(loadedImage => {
    console.log('Expected Label', expectedLabel);
    console.log('Predicted Label', predict(model, loadedImage));
    loadedImage.dispose();
  });
}

buildPretrainedModel().then(pretrainedModel => {
  loadImages(training, pretrainedModel).then(xs => {
    const ys = addLabels(labels);

    const model = getModel(2);

    model.fit(xs, ys, {
      epochs: 20,
      shuffle: true,
    }).then(history => {
      // make predictions
      makePrediction(pretrainedModel, blue3, "0");
      makePrediction(pretrainedModel, red3, "1");
    });
  });
});
```

You should give this a shot, modifying the color images to use Pexels images. You'll need to update the image importing and the label setting to handle the three categories of code. Let me know if you run into problems.

# Conclusion


Again, be careful to test your code at each section of the process and validate with data you know works. Something as simple as passing an incorrect label object will cause your accuracies to be off. I've found that these things are so persnickety, you have to be really careful about debugging. More so than normal things. The tools in place to make sure the code compiles are powerful; the tools in place to make sure it trains correctly are still getting there. As much as possible, rely on open source tools like mine.

To recap, you have learned the basics of how a neural net works, how to set up a data pipeline for loading and transforming images, and how to train your net and translate numerical predictions into human readable strings. Good job!

It's important to also note that training on images from scratch is a more intense process that we didn't really touch on here. You would almost certainly want to avoid training from scratch in a browser, because it would take months, and nobody's got time for that. However, if you're in Node, it's absolutely viable to do so.
