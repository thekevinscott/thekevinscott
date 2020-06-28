---
date: "2018-08-07T14:00:00.000Z"
description: "Tensors have data, dimension, shape, type, and describe valid transformations. They can be built with arrays or Typed Arrays in Javascript."
url: "/tensors-in-javascript/"
image: "cover.png"
tags: ["tensors", "Tensorflow.js", "Javascript", "TypedArrays"]
title: "Tensors in JavaScript"
summary: "The data type at the heart of all Neural Nets."
---

At the heart of most Machine Learning models are numbers. The special data type that undergirds all of the mathematical transformations you perform is called a **Tensor**.

Tensors are a concept imported from mathematics and physics, and they are [considerably more complicated in theory](https://www.quora.com/What-is-a-tensor) than this article will get into. If you're a hacker looking to get started with a Machine Learning project on the web in Javascript, you can assume that:

1. A Tensor has Data
2. A Tensor has a Dimension
3. A Tensor has a Shape
4. A Tensor has a Type
5. A Tensor Describes Valid Transformations

Let's go through these one by one.

![Let's get ready to rumble](rumble.gif "Let's get ready to rumble")

## 1. A Tensor has Data

A Tensor is a repository for some set of data, usually numeric. In this way, it's similar to the flat or multidimensional arrays you write in Javascript.

We can build a Tensor using Tensorflow.js, and get back a representation of its data by calling `.print()`:

```
> tf.tensor([1, 2, 3, 4]).print();
Tensor
    [1, 2, 3, 4]
```

## 2. A Tensor has a Dimension

The array from the previous example was a flat sequence of numbers. Another way of thinking about that array is that it **has a dimension of 1**.

Something more complex, like an Excel spreadsheet which contains rows and columns, would **have a dimension of 2**.

Tensors define an easy way to encode dimensionality into the data structure. (Dimensionality is commonly referred to as "Rank", as in "this tensor has a Rank of 2".)

Let's see an example of a 2-dimensional Tensor:

```
> tf.tensor([[1, 2], [3, 4]]).print();
Tensor
    [[1, 2],
     [3, 4]]
```

Higher rank tensors are used for a wide variety of machine learning problems, as [Daniel Jeffries lists in his tutorial](https://hackernoon.com/learning-ai-if-you-suck-at-math-p4-tensors-illustrated-with-cats-27f0002c9b32):

> * 3D = Time series
> * 4D = Images
> * 5D = Videos

## 3. A Tensor has a Shape

Closely correlated with the Tensor's Dimension (or Rank) is Shape.

A Tensor's shape describes the underlying length of the Tensor's dimensions. Here's an example:

```
> tf.tensor([[1, 2, 3], [3, 4, 5]]).shape
(2) [2, 3]
```

## 4. A Tensor has a Type

A Tensor's data has a fixed type that describes what the data is. Valid types in Tensorflow.js can be floating point numbers (decimals), integers, or booleans.

We can set the data type upon creation of the Tensor:

```
> tf.tensor1d([1, 2], null, 'float32').dtype
"float32"
```

## 5. A Tensor Describes Valid Transformations

A Tensor encodes some knowledge of what are valid mathematical operations in relation to other Tensors. For this reason, it can be useful to think of Tensors not as data structures but as objects or classes. This is exactly how [Tensorflow.js represents a Tensor](https://js.tensorflow.org/api/0.12.0/#class:Tensor).

Let's say we wanted to compute the [dot product](https://en.wikipedia.org/wiki/Dot_product):

```
> tf.tensor1d([1, 2]).dot(tf.tensor2d([[1,2], [2, 3]])).print()
Tensor
    [5, 8]
```

However, if we try and perform an invalid calculation:


```
> tf.tensor2d([[1, 2, 3], [4, 5, 6]]).dot(tf.tensor2d([[1,2], [2, 3]])).print()
Uncaught Error: Error in dot: inner dimensions of inputs must match, but got 3 and 2.
```

Tensors prevent us from performing invalid calculations. If you're coming from a non-mathematical background (like I am) you'll be very grateful for these error messages.

---

![A Mad Scientist](scientist.gif "A mad scientist creating tensors")

We've seen examples so far of building Tensors with Tensorflow.js using plain arrays as input. Another way of constructing a tensor is with a `TypedArray`.

# Typed Arrays

A Typed Array is defined by an underlying data buffer, an `ArrayBuffer`, and an object for working with that buffer's data, a `DataView`.

> Typed Arrays are a relatively recent addition to browsers, born out of the need to have an efficient way to handle binary data in WebGL. A Typed Array is a slab of memory with a typed view into it, much like how arrays work in C. &mdash; [Ilmari Heikkinen](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays)

You can create a view directly, creating a buffer behind the scenes with:

```
const typedArray = new Int8Array(5);
f64a[0] = 1;
f64a[1] = 2;

// Int8Array(5) [1, 2, 0, 0, 0]
```

Alternatively, you can explicitly declare your buffer separately from your view:

```
const buffer = new ArrayBuffer(8); // 8-byte ArrayBuffer.
const typedArray = new Int8Array(buffer);
typedArray[0] = 1

// Int8Array(8) [1, 0, 0, 0, 0, 0, 0, 0]
```

If you do explicitly create your buffer, you must be aware of the underlying representation of the bytes:

```
const buffer = new ArrayBuffer(8); // 8-byte ArrayBuffer.
const typedArray = new Int16Array(buffer);
typedArray[0] = 1

// Int16Array(4) [1, 0, 0, 0]
```

You can have multiple views pointing to the same underlying buffer. This approach is used, for instance, [to iteratively build MNIST image examples into an underlying data buffer](https://thekevinscott.com/dealing-with-mnist-image-data-in-tensorflowjs/). Here's a simple example:

```
const buffer = new ArrayBuffer(8); // 8-byte ArrayBuffer.
const firstHalfView = new Int8Array(buffer, 0, 4);
const secondHalfView = new Int8Array(buffer, 4, 4);
firstHalfView[0] = 1
secondHalfView[0] = 2
console.log(buffer);
// [[Int8Array]]: Int8Array(8) [1, 0, 0, 0, 2, 0, 0, 0]
```

There are a number of eponymous Typed Arrays you can use; [a great rundown of each with their byte sizes is here](https://blog.codingbox.io/exploring-javascript-typed-arrays-c8fd4f8bd24f).

## Why Use a Typed Array?

The answer: **performance**.

Typed Arrays were originally introduced to handle things like WebGL and other graphical layers that required blazing fast performance. Machine Learning benefits from a similar level of performance, which is why many large machine learning models are trained on servers, parallelized across powerful GPUs.

> Because a Typed Array is backed by raw memory, the JavaScript engine can pass the memory directly to native libraries without having to painstakingly convert the data to a native representation. As a result, typed arrays perform a lot better than JavaScript arrays for passing data to WebGL and other APIs dealing with binary data. &mdash; [Ilmari Heikkinen](https://www.html5rocks.com/en/tutorials/webgl/typed_arrays)

It's a good habit to get comfortable with using Typed Arrays to ensure you're writing performant code.

# Conclusion

In practice you can get by with Tensors keeping in mind that a tensor has:

1. Data
2. Dimension
3. Shape
4. Type
5. Description of Valid Transformations
