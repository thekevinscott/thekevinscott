---
path: "/background-images-in-react-native/"
date: "2017-05-09T09:00:00.000Z"
title: "Background Images in React Native"
image: "cover.jpeg"
tags: ["react native", "background images"]
---

![](https://cdn-images-1.medium.com/max/800/1*lQUxDjLJOjiqJbd2Q_4xTA.png)

A [common
question](http://stackoverflow.com/questions/29322973/whats-the-best-way-to-add-a-full-screen-background-image-in-react-native)
amongst React Native developers is how to put a background image on a view.

On the web, it’s a piece of cake:

    <div style={{ backgroundImage: 'url(/my-image.
    )' }}>...</div>

In React Native, there’s no `background-image` tag; instead, the `<Image>`
component does the heavy lifting.

### Layouts

[OUR SAMPLE IMAGE](https://s15.postimg.org/tw2qkvmcb/400px.png)

There’s [5
layouts](https://facebook.github.io/react-native/docs/image.html#resizemode) to
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

<span class="figcaption_hack">center</span>

<span class="figcaption_hack">contain</span>

<span class="figcaption_hack">cover</span>

<span class="figcaption_hack">repeat</span>

<span class="figcaption_hack">stretch</span>

### Referencing images

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

<span class="figcaption_hack">Error Message</span>

It probably means you need to restart your packager, so it can pick up the
imported image.

### Examples

Let’s show an example where we fetch an image from a public URL and position it
absolutely:

Easy as that! The key is the use of `flex: 1`, which will cause the `<Image
/>`component to fill its container. You can read [more about Flexbox
here](https://facebook.github.io/react-native/docs/flexbox.html).

You can play around with `resizeMode` to see the different layout options.

### With Text

Usually a background image sits behind something else. There’s two ways to
achieve that: using the `<Image />` as the view layer itself, or wrapping it in
another `<View />`.

Here’s an example using the `<Image />` as the wrapper component:

And here’s an example wrapping the `<Image />` in a container `<View />`:

I slightly prefer the latter approach, as I think it’s more flexible if you need
to make further adjustments or include other elements, but either approach
works.

* [React Native](https://medium.com/tag/react-native?source=post)
* [JavaScript](https://medium.com/tag/javascript?source=post)
* [Image](https://medium.com/tag/image?source=post)
* [Flexbox](https://medium.com/tag/flexbox?source=post)

By clapping more or less, you can signal to us which stories really stand out.

### [Kevin Scott](https://medium.com/@thekevinscott)

React & React Native // Chatbot Evangelist // Machine Learning //
Cryptocurrencies // Desingineer 🤖

### [React Native Cafe](https://medium.com/reactnative?source=footer_card)

Articles about React Native

