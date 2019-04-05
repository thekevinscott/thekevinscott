---
title: "Text Compression"
date: "2019-04-19 08:00:00.000 EST"
description: ""
path: "/text-compression/"

---

Recently a client of mine was looking to display a large amount of tabular data on the web. Imagine something like this:

In the past, I've built tables that horizontally scroll, or that feature the ability to add or subtract columns. In this case, since the column headers were so long but the data itself so short, I had a thought: what if the column text itself could collapse with the width of the table? Then I had another thought: that would be the perfect use case for a Neural Network!

If you've told my writing you know I'm a big proponent of combining design and AI. One part of that is that building neutral nets did be cheap. That is, it should be fast and easy to go from the germ of an idea to a working prototype. If I want to profile something in code, I can have a quick and dirty implementation in less than an hour. If I'm not a cider, I can use a myriad of tools to build me a clickable prototype. 

This is a small feature. Something like this is not going to move the needle. But many features like this added together can  add up to a sense of craft and care and that can move the needle. 

Can spoke at my Meetup and taker about how intelligence will beat noon intelligence. The popcorn button. This is a test of that. 

Let's walk through this as a thought exercise. First we build it, then we analyze how we could make it better. 

***

The first step of something like this would be research. It's this even a good idea? Do users want collapsible text, and is it possible for the kind of column headers were debating?

For the purposes of this article were gonna skip right over that and assume we did the research and the users are clamoring for this. 

Second: can this even be done?

Before we can build our Network we have to preprocess our data. If you've either with NLP you probably know done it this. The basic idea is you assign every part a number. 

Often with natural language we deal at the level of words. A common technique: bag of words. Assign each word a number, then you can compare them and do semantic similarity for instance. Problem: words might be the same, but be plural, different tenses, etc so you can use stemming, lemmatizwtikn, and other technique to make it more robust. 

But words contain a great deal of semantic meaning that this approach can't always handle, so another common technique is word embeddings. The idea is some very friendly researchers train a number of models on vast corpora of text (say, all of wikipedia), and at the end there able to represent a word as a point in a multi dimensional space. (often you can specify how many dimensions). The dimensions encode meaning. A common example is King queen. 

However, were not really operating at the level of words, we are operating at the character level. We still assign things numbers. Let's see an example. 

We actually need to one hot encode it. 

We also need to pad it. Days structure much be consistent, aka of the same shape, so you have to determine that up front. We can use a length of the longest word in the English language (no German here) one thing we won't tackle is multiple words, which would be considerably more complicated. 

What about the output? My first thought was to output a set of linear values representing importance, something like this:

And then we could loop of characters in order depending on width:

The benefit of this approach is we can use a set of heuristics to quicky create data. For instance, we can assume that plural can be dropped; similarly vowels can be (I don't have a source for that)

A problem though is that shortened words don't always share the same letters. For instance biz. So another approach would output an actual new words:

My gut says this approach will be much harder to train. In the first case the network needs to learn to sign score to letters, which are sometimes dependent on their position and sometimes dependent on what kind of letter they are. 

With this second sourish the network is effective meant people brand new words. It's feasible but it'll probably takeLonger to train and require more data. 

Also, in the later case we will also need to specify how much compression we want. I don't know the best way. Maybe add a new column at the beginning:

Taking a step back, this kind of a decision is a conversation between designer and Dev. The designer needs an understanding of the technical tradeoffs and what is possible the Dev needs to understand what is acceptable. 

So let's talk data. Pull the top x most popular words. Then use heuristics to generate new words. Get a dataset. We can build a tool to collect data. Your abbreviations will probably be specific, medical is different from legal. 

Let's talk the model. Frankly I have no idea what model to use, and I don't care. Not that I'm incurious, but rather, whatever gets me most of the way there-doesn't have to be perfect-is fine. Therefore, I'll throw a bunch of stuff and see what sticks. 



Problems

One problem is preprocessing. For instance, one hot encoding is not assumed. This can be solved either with good abstractions in code, or with education- like my book!

Model Architecture. Auto ML. convert python to js

Data

NPM tooling. NNs exist in this weird state where they demand interactivity but not in the final app. Storybook provides a good prototype. Also integration with Dropbox, Google drive. 



