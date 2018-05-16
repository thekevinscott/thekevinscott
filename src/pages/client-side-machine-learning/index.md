---
path: "/reasons-for-machine-learning-in-the-browser/"
date: "2018-05-16 08:00:00.000 EST"
title: "Why to run Machine Learning in the Browser"
tags: ["tensorflow.js", "tensorflow", "artificial intelligence", "deep learning", "machine learning", "client-side", "javascript"]
description: "Exploring examples of client-side machine learning, to understand how frameworks like TensorFlow.js unlocks huge value for users."
image: "cover.jpg"
form: "@FooterContainer/TENSORFLOWJS"
image_credit: "Photo by <a href='https://www.flickr.com/photos/alextoul/6412207917/in/photolist-aLCf1V-5LKqDi-5LTp6F-8B2wqT-wokRP-7DvxRd-bdd77c-7xV1w-PNY1sa-fasCLu-9NT1UA-ndnvww-6Pym4y-9NQ5HZ-9NQffM-9NQgCV-9NSZZy-9NSXa5-9NSW8b-4oSw2n-9NSV4u-76jcMx-9DK39M-VPmfLi-8B5E5W-dNHLzC-eZ9uMB-8mE46Q-5wwF6d-hoi196-5wWE7L-wEgXH-aH1nLH-5quA5v-nfuE8a-6RZYky-7xQty-9dWJYM-bX1whU-7xSx6-6S19pA-pcK6bA-76oxa7-ptXDd2-6S1bns-dNHL61-6RVKrR-76jYdc-6RZKB7-6RZQbQ'>Alex Toulemonde</a> on <a href='https://www.flickr.com/photos/alextoul/'>Flickr</a>"
---

Say you’re on your daily commute from Brooklyn to Manhattan to work at that new machine learning startup you just joined a few months ago. Your train is stopped between two stations, the heat is making everyone sticky, and the other riders are buzzing like a beehive.

No worries—your earbuds are in, and you’re ready for some new jams. You pull out your phone and try to load of the newest recommended music, but *crap*—recommendations won’t load because you have no network service. You *know* you downloaded some new music this morning; in fact there it is in your *New Music* playlist, waiting for you. But recommendations? No dice.

[Recently, Google introduced TensorFlow.js to the world](https://medium.com/tensorflow/introducing-tensorflow-js-machine-learning-in-javascript-bf3eab376db). TensorFlow.js is just one example of a machine learning framework which can employ client-side machine learning. **This means that machine learning algorithms can be run directly on your user’s device, without needing to talk to any server. This would mean that those music recommendations could be suggested to you—no matter if you’re at home, in the office, or on that internet-free, sweaty train.**

This post will explore unique examples of client-side machine learning, to understand how a JavaScript machine learning framework like TensorFlow.js unlocks huge value for users, businesses, and software developers.

# Training vs. inference

Before diving in, it’s worth defining two phases of machine learning: training, and inference. **Training** is the process of a machine learning a new capability from an existing set of data. Just like going to school to learn a new school or trade, we teach machines new skills through the training process, by giving them enough concrete examples of something for it to recognize. These examples are called the training dataset.

**Inference**, on the other hand, is the machine performing the skill once it has run through enough examples from the training session. This is like the computer’s piano recital or a pop-quiz, where the computer applies its skill to data it has never seen before.

# Privacy

As [Vinay Muttineni suggests on Quora](https://www.quora.com/What-are-the-advantages-of-running-a-Machine-Learning-algorithm-using-a-Javascript-ML-library-like-Tensorflow-js-Isnt-better-to-train-a-model-on-the-server-side), one of the core benefits to server-side machine learning is that the data being used to train the model, and the usage of the model, can be done entirely on the user’s device. This means no data being fed or stored on a server.

![Amazon Alexa. Credit: Rob Albright via Flickr](23692103834_acc8a0882a_o.jpg)

An example of this is [Tomas Reimers’s suggestion](https://medium.com/@tomasreimers/compiling-tensorflow-for-the-browser-f3387b8e1e1c) of a voice assistant like Google Assistant or Alexa. These systems employ a wake-word (OK, Google or Alexa) using client-side machine learning inference to know to listen for the following commands. The wake-word is local, which ensures that the data sent to the cloud is data the user consents to send up. Data only gets sent to the server once the user explicitly tells the system to start listening. You can think of this usage of client-side machine learning almost as a digital nervous-system reflex—the system starts paying attention using a client-side inference from the wake word (the reflex) before sending up the more robust request from the user to a server (data being sent to the brain).

# Wider access and distribution

Love it or hate it, JavaScript has one of the widest install bases of any language and framework. Virtually any modern personal computing device has a web browser installed, and almost any modern web browser can run JavaScript on it.

This simple fact alone means that machine learning is opened to a multitude of new devices which can now leverage machine learning algorithms. A smartphone which may have had its heyday a few years ago can suddenly leverage machine learning frameworks directly on the device.

![A fitting room. Credit: Antonio Rubio via Flickr](20197650761_aec2b0b88e_o.jpg)

For example, your favorite streetwear brand may want to develop a virtual fitting room so you can see how you look rocking their latest threads before purchasing. According to Business Insider, [23% of eCommerce sales are being made through mobile web](http://www.businessinsider.com/mobile-apps-most-popular-e-commerce-channel-q4-2017-2018-2), so the streetwear brand wants to make sure they are capturing that market share. Using client-side machine learning in the browser, the brand could create a virtual fitting room for their customers to use on their phones or computers. With no app to download or anything to install, client-side machine learning in the browser helps lower the barrier to entry for customers to engage with the virtual fitting room, leading to higher conversion and happier customers.

# Distributed computing

Many of the previous examples have been focused on inference—that is, leveraging a pre-trained machine learning model and data set. There is, additionally, a good use case for distributed computing using client-side machine learning. For example, every time a user engages with a system, he or she should run a machine learning algorithm on their own device, use the data they are engaging with to train the model on their own computer, and then push the new data points to a server to help improve the model. In this way, the user is leveraging his or her own device to run the algorithm, and additionally training the model with the results, which would help future users of the algorithm. This could cut down on the costs for computing power to continuously train a model.

* * *

The world of client-side machine learning is growing and developing quickly, despite the perceived limitations in machine learning with Javascript. Investment from companies like Google hand-porting TensorFlow to JavaScript, however, leads to an exciting new realm of possibility for machine learning to become accessible by users leveraging nothing more than the web browser they already use every day.
