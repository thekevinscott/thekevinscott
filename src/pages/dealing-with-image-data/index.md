---
path: "/dealing-with-image-data-in-tensorflowjs/"
date: "2018-05-27 10:00:00.000 EST"
title: "Dealing with image data in Tensorflow.js"
image: "cover.jpg"
tags: ["tensorflow.js", "tensorflow", "artificial intelligence", "deep learning", "machine learning", "image data"]
description: ""
layout: ""
form: "@FooterContainer/TENSORFLOWJS"
image_credit: "Photo by <a href='https://unsplash.com/photos/ajpU8UmfQAM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Hedi Alija</a>"
---

> There's the joke that 80 percent of data science is cleaning the data and 20 percent is complaining about cleaning the data ... data cleaning is a much higher proportion of data science than an outsider would expect. Actually training models is typically a relatively small proportion (less than 10 percent) of what a machine learner or data scientist does.
\- [Anthony Goldbloom, CEO of Kaggle](https://www.theverge.com/2017/11/1/16589246/machine-learning-data-science-dirty-data-kaggle-survey-2017)

Manipulating data is a crucial step step for any machine learning problem. This article will take the [MNIST example for Tensorflow.js (0.11.1)](https://github.com/tensorflow/tfjs-examples/blob/master/mnist/data.js) and walk through the code that handles the data loading line-by-line.

# MNIST example

```javascript
18 import * as tf from '@tensorflow/tfjs';
19
20 const IMAGE_SIZE = 784;
21 const NUM_CLASSES = 10;
22 const NUM_DATASET_ELEMENTS = 65000;
23
24 const NUM_TRAIN_ELEMENTS = 55000;
25 const NUM_TEST_ELEMENTS = NUM_DATASET_ELEMENTS - NUM_TRAIN_ELEMENTS;
26
27 const MNIST_IMAGES_SPRITE_PATH =
28     'https://storage.googleapis.com/learnjs-data/model-builder/mnist_images.png';
29 const MNIST_LABELS_PATH =
30     'https://storage.googleapis.com/learnjs-data/model-builder/mnist_labels_uint8';`
```

First the code imports tensorflow [(make sure you're transpiling your code!)](/tensorflowjs-hello-world/), and establishes some constants, including:

* `IMAGE_SIZE` – the size of an image (width and height of 28x28 = 784)
* `NUM_CLASSES` – number of label categories (a number can be 0-9, so there's 10 classes)
* `NUM_DATASET_ELEMENTS` – number of images total (65,000)
* `NUM_TRAIN_ELEMENTS` – number of training images (55,000)
* `NUM_TEST_ELEMENTS` – number of test images (10,000, aka the remainder)
* `MNIST_IMAGES_SPRITE_PATH` & `MNIST_LABELS_PATH` – paths to the images and the labels

The images are concatenated into one huge image which looks like:

![MNIST Data sprited](mnist.png "MNIST data as sprites")

### `MnistData`
Next up is `MnistData`, a class that exposes the following functions:

* `load` – responsible for asynchronously loading the image and label data
* `nextTrainBatch` – load the next training batch
* `nextTestBatch` – load the next test batch
* `nextBatch` – a generic function to return the next batch, depending on whether it is in the training set or test set

For the purposes of getting started, this article will only step through the `load` function.

### `load`
```javascript
44 async load() {
45   // Make a request for the MNIST sprited image.
46   const img = new Image();
47   const canvas = document.createElement('canvas');
48   const ctx = canvas.getContext('2d');
```

`async` [is a relatively new language feature in Javascript](/tensorflowjs-hello-world/#async-and-await) for which you will need a transpiler.

The `Image` object is a native DOM function that represents an image in memory, and it provides callbacks for when the image is loaded along with access to the image attributes. `canvas` is another DOM element that provides easy access to pixel arrays and processing by way of `context`.

Since both of these are DOM elements, if you're working in Node.js (or a Web Worker) you won't have access to these elements. For an alternative approach see below.

### `imgRequest`
```javascript
49 const imgRequest = new Promise((resolve, reject) => {
50   img.crossOrigin = '';
51   img.onload = () => {
52     img.width = img.naturalWidth;
53     img.height = img.naturalHeight;
```

The code initializes a new promise that will be resolved once the image is loaded successfully. _(This example does not explicitly handle the error state.)_

`crossOrigin` is an `img` attribute that allows for the loading of images across domains, and gets around CORS (cross-origin resource sharing) issues when interacting with the DOM. `naturalWidth` and `naturalHeight` refer to the original dimensions of the loaded image, and serve to enforce that the image's size is correct when performing calculations.

```javascript
55     const datasetBytesBuffer =
56     new ArrayBuffer(NUM_DATASET_ELEMENTS * IMAGE_SIZE * 4);
57
58     const chunkSize = 5000;
59     canvas.width = img.width;
60     canvas.height = chunkSize;
```
The code initializes a new buffer to contain every pixel of every image. It multiplies the total number of images by the size of each image by the number of channels (4).

I *believe* that `chunkSize` is used to prevent the UI from loading too much data into memory at once, though I'm not 100% sure.

```javascript
62     for (let i = 0; i < NUM_DATASET_ELEMENTS / chunkSize; i++) {
63       const datasetBytesView = new Float32Array(
64         datasetBytesBuffer, i * IMAGE_SIZE * chunkSize * 4,
65         IMAGE_SIZE * chunkSize);
66       ctx.drawImage(
67         img, 0, i * chunkSize, img.width, chunkSize, 0, 0, img.width,
68         chunkSize);
69
70       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
```

This code loops through every image in the sprite and initialize a new `TypedArray` for that iteration; then, the context image gets a chunk of the image drawn. Finally, that drawn image is turned into image data using context's [`getImageData`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData) function, which returns an object representing pixels.

```javascript
72       for (let j = 0; j < imageData.data.length / 4; j++) {
73         // All channels hold an equal value since the image is grayscale, so
74         // just read the red channel.
75         datasetBytesView[j] = imageData.data[j * 4] / 255;
76       }
77     }
```

We loop through the pixels, and divide by 255 (the maximum possible value of a pixel) to clamp the values between 0 and 1. Only the red channel is necessary, since its a grayscale image.

```javascript
78     this.datasetImages = new Float32Array(datasetBytesBuffer);
79
80     resolve();
81   };
82   img.src = MNIST_IMAGES_SPRITE_PATH;
83 });
```

This line takes the buffer, and recasts it into a new `TypedArray` that holds our pixel data, and then resolves the Promise. The last line (setting the `src`) actually begins loading the image, which starts the function.

One thing that confused me at first was the behavior of `TypedArray` in relation to its underlying data buffer. You might notice that `datasetBytesView` is set within the loop, but is never returned. Under the hood, `datasetBytesView` is referencing the buffer `datasetBytesBuffer` (with which it is initialized); when the code updates the pixel data, it is indirectly editing the values of the buffer itself, which in turn is recast into a new `Float32Array` on line 78.

## Fetching image data outside of the DOM

If you're in the DOM, you should use the DOM. The browser (through `canvas`) takes care of figuring out the format of images and translating buffer data into pixels. But if you're working outside the DOM (say, in Node.js, or a Web Worker), you'll need an alternative approach.

`fetch` provides a mechanism, `response.arrayBuffer`, which gives you access to a file's underlying buffer. We can use this to read the bytes manually, avoiding the DOM entirely. Here's an alternative approach to writing the above code (this code requires `fetch`, which can be polyfilled in Node with something like [`isomorphic-fetch`](https://github.com/matthew-andrews/isomorphic-fetch)):

```javascript
const imgRequest = fetch(MNIST_IMAGES_SPRITE_PATH).then(resp => resp.arrayBuffer()).then(buffer => {
  return new Promise(resolve => {
    const reader = new PNGReader(buffer);
    return reader.parse((err, png) => {
      const pixels = Float32Array.from(png.pixels).map(pixel => {
        return pixel / 255;
      });
      this.datasetImages = pixels;
      resolve();
    });
  });
});
```

This returns an array buffer for the particular image. When writing this, I first attempted to parse the incoming buffer myself, which I wouldn't recommend. (If you *are* interested in doing that, [here's some information on how to read an array buffer for a png](http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html).) Instead, I elected to [use `pngjs`](https://github.com/arian/pngjs), which handles the `png` parsing for you. When dealing with other image formats, you'll have to figure out the parsing functions yourself.

# Just scratching the surface

Understanding data manipulation is a crucial component of machine learning in Javascript. By understanding our use cases and requirements, we can use a few key functions to elegantly format our data correctly for our needs.

The Tensorflow.js team is continuously changing the underlying data API in Tensorflow.js. This can help accommodate more of our needs as the API evolves. This also means that it's worth staying abreast of [developments to the API](https://github.com/tensorflow/tfjs) as Tensorflow.js continues to grow and be improved.
