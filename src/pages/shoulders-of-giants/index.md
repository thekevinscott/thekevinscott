---
path: "/shoulders-of-giants/"
date: ""
title: "Standing on the shoulders of giants"
tags: ["artificial intelligence", "deep learning", "machine learning", "PC", "pytorch", "tensorflow", "gpu"]
---

One assumption I held before I started learning about training AI was that, when training a neural network, you'd feed it data from scratch and train it on that data (and only on that data). If you want it to learn to recognize dogs, you feed it images of dogs.

As part of my initial foray into learning AI, I've been working through the [fast.ai](http://fast.ai) courses, and one of the very first assignments begins by leveraging a pre-trained model (specifically [VGG16](https://www.kaggle.com/keras/vgg16), trained to identify 1000 categories of images based on the [corpus of data from ImageNet](http://www.image-net.org)), and build your training model on top of that, to identify dogs and cats. So you're taking the predictions from the VGG16 model - which could be one a 1000 items - and whittling that down to 2 - cat or dog.

It makes perfect sense that you'd build models like this; why train from scratch if someone has already done the training work beforehand?

Imagine a scenario where you're training a model for use in teaching native English speakers to speak Spanish. Instead of training your model from scratch, you could leverage a pre-trained model that already recognizes human voices. Maybe you also leverage a model that understands the English and Spanish languages. Your final model might be a thin layer on top of both of these pre-existing models, that specifically learns how to interpret English accents mangling Spanish words.

In particular, I wonder how this will affect design.

There's been some preliminary work around [turning design mockups into code with deep learning](https://blog.floydhub.com/turning-design-mockups-into-code-with-deep-learning/). Imagine startiing with a hand-drawn sketch as your base. You click around the sketch, nudging, encouraging and discouraging the AI: "No no, that button should open a new page", or "that link should create a new widget". You could use pre-trained models to help you where appropriate. Building a [CRUD app](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete)? Grab a pre-built model off the shelf that knows how to create, delete, and update. How about Uber for dogs? Grab a pre-built Uber model, and train a new layer on top to recognize dogs instead of humans.

> This is the cool thing about neural networks: you don’t have to tell them what to find. They decide what they want to find in order to solve your problem. &mdash; [Jeremy Howard](https://www.youtube.com/watch?v=6kwQEBMandw&feature=youtu.be&t=12m22s)

This layered approach to making neural nets smarter - by building on the shoulders of other, pre-trained nets - it blows my mind. It feels like programming from the future. Today we write instructions for computers to execute (a few levels abstracted from entering binary 0's and 1's), in a future language we could use increasingly abstract language to describe the parameters of what the computer should achieve, and then let the computer figure it out.
