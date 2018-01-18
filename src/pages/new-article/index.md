---
path: "/shoulders-of-giants/"
date: "2018-01-20T09:00:00.000Z"
title: "Standing on the shoulders of giants"
image: "cover.png"
tags: ["artificial intelligence", "deep learning", "machine learning", "PC", "pytorch", "tensorflow", "gpu"]
---

As part of my initial foray into learning AI, I've been running through the [fast.ai](http://fast.ai) courses, reading the [deeplearningbook](http://deeplearningbook.org) book, and beginning to dabble with [kaggle](http://kaggle.com) competitions.

One thing I was unaware of was, I had this idea that, if you wanted to train a neural net to identify images of dogs, you'd give it a dataset and train it from scratch to recognize dogs.

In fact, what fastai recommends is building on top of a pre-trained model, specifically VGG16, which is trained to recognize a 1000 categories of images (based on the corpus of data from ImageNet). You then train a model on top of this to pull the cats and dogs from VGG's predictions.

I didn't expect this is how things could work but it makes perfect sense.

The other thing that jumps out at me with my rudimentary knowledge is that this feels like programming from the future. Whereas today we write instructions for computers to execute (a few levels abstracted from entering binary 0's and 1's), in a future language we could use increasingly abstract language to describe the parameters of what the computer should achieve, and then let the computer figure it out. And pre-trained models could be absolutely vital to that.

Imagine a scenario.

Or imagine using an AI to help design an app. Instead of jumping into code, you start with a Sketch that becomes a clickable prototype. You then click around the app, nudging, encouraging and discouraging the computer: "No no, that button should open a new page", or "that link should create a new widget". And maybe you could use pre-trained models to help you where appropriate. Let's say you want a CRUD app; instead of training it from scratch, use a pre-built model off the shelf that knows how
to create, delete, and update. Or take it a step further: let's say you want to build Uber for dogs. Grab the pre-built Uber module, and just train it to recognize dogs instead of humans. Viola, new app!

I don't know how feasible any of this stuff is, but it's all super exciting.

Neural networks: you don’t need to tell them what to find. https://youtu.be/6kwQEBMandw?t=13m (a little before)
