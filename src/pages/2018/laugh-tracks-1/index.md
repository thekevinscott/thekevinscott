---
path: /laugh-tracks-1/
date: 2018-09-26T09:53:00.000Z
description: ""
title: "Laugh Tracks 1"
image: "cover.jpg"
form: "TENSORFLOWJS"
tags: ["foo", "bar"]
---

I'm building a laugh track generator.

Imagine an iPhone app, sitting on the table while you have a conversation with your friends. You say something, to be backed up by a symphony of laughter.

Pointless? Very. Fun? Yes.

---

The first step has been to train the machine to recognize laughter.

I'm leveraging VGGish as a pretrained model.

I built some code to download youtube videos and process them into the right audio format. So I can just find audio clips of laughter, and not laughter, and download them. It also removes silence (optionally - many laugh tracks are split by silence, which I don't want to train as laughter).

I got it working with a basic sine wave example.

From there, I started training on laughter. It... kinda works! But for novel tracks, it was performing very badly.

So I knew I'd need to actually train it on a wider array of data. I also need to improve the model itself - and identify what it gets right and what it gets wrong.

Next steps:

* Build a tool to quickly label audio data from sitcoms. Ideally this would happen within the jupyter interface.
* Set up better training and test data. Hold back a validation set. Perhaps write numpy to disk (take hash of the incoming file names). Plot loss over time. Plot accuracy as well. Play with hyperparameters.

Oh! I also built a sound wave integration with Jupyter notebook. Lining up the samples was proving to be difficult, but I think I've got that squared away.
