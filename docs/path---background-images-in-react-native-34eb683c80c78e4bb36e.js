webpackJsonp([0x87351c7d7271],{380:function(e,a){e.exports={data:{markdownRemark:{html:'<p><img src="https://cdn-images-1.medium.com/max/800/1*lQUxDjLJOjiqJbd2Q_4xTA.png"></p>\n<p>A <a href="http://stackoverflow.com/questions/29322973/whats-the-best-way-to-add-a-full-screen-background-image-in-react-native" target="_blank" rel="nofollow noopener noreferrer">common\nquestion</a>\namongst React Native developers is how to put a background image on a view.</p>\n<p>On the web, it’s a piece of cake:</p>\n<pre><code>&#x3C;div style={{ backgroundImage: \'url(/my-image.\n)\' }}>...&#x3C;/div>\n</code></pre>\n<p>In React Native, there’s no <code>background-image</code> tag; instead, the <code>&#x3C;Image></code>\ncomponent does the heavy lifting.</p>\n<h3 id="layouts"><a href="#layouts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Layouts</h3>\n<p><a href="https://s15.postimg.org/tw2qkvmcb/400px.png" target="_blank" rel="nofollow noopener noreferrer">OUR SAMPLE IMAGE</a></p>\n<p>There’s <a href="https://facebook.github.io/react-native/docs/image.html#resizemode" target="_blank" rel="nofollow noopener noreferrer">5\nlayouts</a> to\nbe aware of that an image can take.</p>\n<ul>\n<li><code>center</code> - Centers the image, without resizing it.</li>\n<li><code>repeat</code> - Repeats the image, without resizing it.</li>\n<li><code>stretch</code> - Stretches the image to fit its bounds, without preserving the\nimage’s aspect ratio.</li>\n<li><code>contain</code> - Resizes the image to fit its bounds, while also preserving its\naspect ratio.</li>\n<li><code>cover</code> - Resizes the image so its shorter side fits its bounds, while also\npreserving its aspect ratio. In practice, this means that the longer side while\noverlap the borders of its bounds.</li>\n</ul>\n<p>Here’s examples of each in practice:</p>\n<p><span class="figcaption_hack">center</span></p>\n<p><span class="figcaption_hack">contain</span></p>\n<p><span class="figcaption_hack">cover</span></p>\n<p><span class="figcaption_hack">repeat</span></p>\n<p><span class="figcaption_hack">stretch</span></p>\n<h3 id="referencing-images"><a href="#referencing-images" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Referencing images</h3>\n<p>If you haven’t used <code>&#x3C;Image /></code> before, a quick note on assets. There’s two ways\nof serving images, over the network and locally. Using local images will be\nfaster but result in a larger app binary, and can’t be updated on the fly.</p>\n<p>If you’re using remote images, keep in mind two things:</p>\n<ol>\n<li>Use <code>https</code> links instead of <code>http</code>. <a href="https://developer.apple.com/news/?id=12212016b" target="_blank" rel="nofollow noopener noreferrer">Apple will block\nnon-</a><code>https</code><a href="https://developer.apple.com/news/?id=12212016b" target="_blank" rel="nofollow noopener noreferrer">\nlinks</a>, and in my experience\nthis error will happen silently.</li>\n<li>For larger images, explore the caching policies <a href="https://facebook.github.io/react-native/docs/images.html#cache-control-ios-only" target="_blank" rel="nofollow noopener noreferrer">detailed\nhere</a>\nto reduce network requests for your users.</li>\n</ol>\n<p>If instead you decide to serve images locally, keep in mind images are served\nrelative from your app root folder. I usually put my local images into an assets\nfolder with other media, so from <code>index.ios.js</code> I can call them with:</p>\n<p><code>require(\'./assets/my-image.png\')</code></p>\n<p>Finally, if you add a new image to your app and come across an error like this:</p>\n<p><span class="figcaption_hack">Error Message</span></p>\n<p>It probably means you need to restart your packager, so it can pick up the\nimported image.</p>\n<h3 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h3>\n<p>Let’s show an example where we fetch an image from a public URL and position it\nabsolutely:</p>\n<p>Easy as that! The key is the use of <code>flex: 1</code>, which will cause the <code>&#x3C;Image /></code>component to fill its container. You can read <a href="https://facebook.github.io/react-native/docs/flexbox.html" target="_blank" rel="nofollow noopener noreferrer">more about Flexbox\nhere</a>.</p>\n<p>You can play around with <code>resizeMode</code> to see the different layout options.</p>\n<h3 id="with-text"><a href="#with-text" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>With Text</h3>\n<p>Usually a background image sits behind something else. There’s two ways to\nachieve that: using the <code>&#x3C;Image /></code> as the view layer itself, or wrapping it in\nanother <code>&#x3C;View /></code>.</p>\n<p>Here’s an example using the <code>&#x3C;Image /></code> as the wrapper component:</p>\n<p>And here’s an example wrapping the <code>&#x3C;Image /></code> in a container <code>&#x3C;View /></code>:</p>\n<p>I slightly prefer the latter approach, as I think it’s more flexible if you need\nto make further adjustments or include other elements, but either approach\nworks.</p>\n<ul>\n<li><a href="https://medium.com/tag/react-native?source=post" target="_blank" rel="nofollow noopener noreferrer">React Native</a></li>\n<li><a href="https://medium.com/tag/javascript?source=post" target="_blank" rel="nofollow noopener noreferrer">JavaScript</a></li>\n<li><a href="https://medium.com/tag/image?source=post" target="_blank" rel="nofollow noopener noreferrer">Image</a></li>\n<li><a href="https://medium.com/tag/flexbox?source=post" target="_blank" rel="nofollow noopener noreferrer">Flexbox</a></li>\n</ul>\n<p>By clapping more or less, you can signal to us which stories really stand out.</p>\n<h3 id="kevin-scott"><a href="#kevin-scott" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://medium.com/@thekevinscott" target="_blank" rel="nofollow noopener noreferrer">Kevin Scott</a></h3>\n<p>React &#x26; React Native // Chatbot Evangelist // Machine Learning //\nCryptocurrencies // Desingineer 🤖</p>\n<h3 id="react-native-cafe"><a href="#react-native-cafe" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><a href="https://medium.com/reactnative?source=footer_card" target="_blank" rel="nofollow noopener noreferrer">React Native Cafe</a></h3>\n<p>Articles about React Native</p>',timeToRead:3,frontmatter:{date:"May 09, 2017",path:"/background-images-in-react-native/",title:"Background Images in React Native",image:{childImageSharp:{sizes:{src:"/static/cover-9f39269aaa12f331643c9eb3af7c01f4-9c672.jpeg",srcSet:"/static/cover-9f39269aaa12f331643c9eb3af7c01f4-f4c48.jpeg 600w,\n/static/cover-9f39269aaa12f331643c9eb3af7c01f4-5b977.jpeg 1200w,\n/static/cover-9f39269aaa12f331643c9eb3af7c01f4-9c672.jpeg 2000w",sizes:"(max-width: 2000px) 100vw, 2000px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---background-images-in-react-native-34eb683c80c78e4bb36e.js.map