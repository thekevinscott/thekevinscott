---
path: "/background-images-in-react-native/"
date: "2017-05-09T09:00:00.000Z"
title: "Background Images in React Native"
image: "cover.jpeg"
image_height: 700
image_credit: "Patrick Tomasso"
tags: ["react native", "images"]
description: "Five different layouts a background image can take with React Native"
---

A [common question](http://stackoverflow.com/questions/29322973/whats-the-best-way-to-add-a-full-screen-background-image-in-react-native) amongst React Native developers is how to put a background image on a view.

On the web, it’s a piece of cake:

```
<div style={{ backgroundImage: 'url(/my-image.png)' }}>...</div>
```

In React Native, there’s no `background-image` tag; instead, the `<Image>`
component does the heavy lifting.

## Layouts

![The sample image we'll be using](images/sample.jpg)
<capt>The sample image we'll be using</capt>

There's [5 layouts](https://facebook.github.io/react-native/docs/image.html#resizemode) to
be aware of that an image can take.

* `center` - Centers the image, without resizing it.
* `repeat` - Repeats the image, without resizing it.
* `stretch` - Stretches the image to fit its bounds, without preserving the
image’s aspect ratio.
* `contain` - Resizes the image to fit its bounds, while also preserving its
aspect ratio.
* `cover` - Resizes the image so its shorter side fits its bounds, while also
preserving its aspect ratio. In practice, this means that the longer side while
overlap the borders of its bounds.

Here’s examples of each in practice:

![Center Image](images/center.png)
<capt>center</centeR>

![Contain Image](images/contain.jpg)
<capt>contain</capt>

![Cover Image](images/cover.png)
<capt>cover</capt>

![Repeat Image](images/repeat.jpg)
<capt>repeat</capt>

![Stretch Image](images/stretch.png)
<capt>stretch</capt>

## Referencing images

If you haven’t used `<Image />` before, a quick note on assets. There’s two ways
of serving images, over the network and locally. Using local images will be
faster but result in a larger app binary, and can’t be updated on the fly.

If you’re using remote images, keep in mind two things:

1.  Use `https` links instead of `http`. [Apple will block
non-](https://developer.apple.com/news/?id=12212016b)`https`[
links](https://developer.apple.com/news/?id=12212016b), and in my experience
this error will happen silently.
1.  For larger images, explore the caching policies [detailed
here](https://facebook.github.io/react-native/docs/images.html#cache-control-ios-only)
to reduce network requests for your users.

If instead you decide to serve images locally, keep in mind images are served
relative from your app root folder. I usually put my local images into an assets
folder with other media, so from `index.ios.js` I can call them with:

`require('./assets/my-image.png')`

Finally, if you add a new image to your app and come across an error like this:

![Error Message](images/error.png)
<capt>Error Message</capt>

It probably means you need to restart your packager, so it can pick up the
imported image.

## Examples

Let’s show an example where we fetch an image from a public URL and position it
absolutely:

<script src="https://gist.github.com/thekevinscott/0381ad0ff8e2fe29c47f0e1ab71d5b74.js"></script>

Easy as that! The key is the use of `flex: 1`, which will cause the `<Image
/>`component to fill its container. You can read [more about Flexbox
here](https://facebook.github.io/react-native/docs/flexbox.html).

You can play around with `resizeMode` to see the different layout options.

## With Text

Usually a background image sits behind something else. There’s two ways to
achieve that: using the `<Image />` as the view layer itself, or wrapping it in
another `<View />`.

Here’s an example using the `<Image />` as the wrapper component:

<script src="https://gist.github.com/thekevinscott/0b2ba3dbd3e3c0b2efd9fd91a08a7696.js"></script>

And here’s an example wrapping the `<Image />` in a container `<View />`:

<script src="https://gist.github.com/thekevinscott/114fc100d47f68b5bd805c9fd32c35c0.js"></script>

I slightly prefer the latter approach, as I think it’s more flexible if you need
to make further adjustments or include other elements, but either approach
works.
