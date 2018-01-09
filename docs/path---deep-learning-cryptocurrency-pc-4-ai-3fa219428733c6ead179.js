webpackJsonp([0xdba1ff142433],{305:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Among the buzzwords of this past year, two tower above the rest: deep learning and cryptocurrencies. It seems that everyone I know (in tech) wants to learn these things. And guess what — so do I! So much so that I\'m building my own computer in order to facilitate that learning.</p>\n<p>What follows are my notes-to-self as I build a computer to learn about deep learning and cryptocurrency mining. In the previous installments we discussed assembling the hardware, installing the OS, and setting up a mining operation. In this installment I\'ll talk about how to set up a cryptocurrency miner and connect to a pool.</p>\n<iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/96fcab/?as_embed"></iframe>\n<hr />\n<p>To recap, in case you\'re just getting started with this series: my goal in purchasing and building my own PC was to have hardware on hand to run machine learning algorithms on, and bring myself up to speed on the exciting advances happening in AI. With the mining operation up and running, it\'s time for some AI!</p>\n<p>The two packages we\'re going to install are <a href="https://www.tensorflow.org/">TensorFlow</a> and <a href="https://github.com/cdw/pytorch">PyTorch</a>. I\'ve heard lots of buzz about these two frameworks and there\'s tons of good resources for each. This article will walk through basic installation details on Ubuntu for both, plus instructions on setting up Jupyter notebooks. If you want to just pick one, <a href="https://awni.github.io/pytorch-tensorflow/">Awni Hannun provides a great overview of the differences</a>.</p>\n<h1>Docker</h1>\n<p><strong>For both TensorFlow and PyTorch, we\'re going to install using Docker</strong>.</p>\n<p>Docker provides a virtualized environment that lets you isolate packages and libraries (or in our case, download pre-configured environments).</p>\n<h2>Why Docker?</h2>\n<p>The TensorFlow <a href="https://www.tensorflow.org/install/install_linux">docs offer four options for installing TensorFlow</a>. My first instinct was to install directly using native <code>pip</code>.</p>\n<p>I installed CUDA 9, the latest version, which as of this writing Tensorflow doesn\'t support, and got lost in dependency hell trying to downgrade / uninstall / reinstall CUDA. A friend recommended I leave all that nonsense alone and just install Docker.</p>\n<p>So that\'s my recommendation: <strong>install docker and avoid dependency hell</strong>. </p>\n<h2>Step-by-step Docker installation instructions</h2>\n<ol>\n<li>Install <code>docker</code>. <a href="https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-16-04">Instructions for installing Docker on Ubuntu are here</a>.</li>\n<li>Make sure to follow the optional Step 2 instructions on adding yourself to the correct group so as to avoid needing <code>sudo</code>.</li>\n<li>Install <code>nvidia-docker</code>. By default, <code>docker</code> doesn\'t support leveraging the NVIDIA GPUs effectively, so to take advantage of that hardware <a href="https://github.com/NVIDIA/nvidia-docker#xenial-x86_64">you\'ll need to install <code>nvidia-docker</code></a>.</li>\n</ol>\n<h1>TensorFlow</h1>\n<p><a href="https://www.tensorflow.org/">TensorFlow</a> is software for machine learning released by the <a href="https://research.google.com/teams/brain/">Google Brain</a> team in 2015. It provides a set of tools for specifying training instructions, and then translating those instructions into commands that can be run quickly and take advantage of GPUs.</p>\n<p>It\'s a powerful piece of software and since it\'s release it\'s picked up a ton of developer mindshare.</p>\n<h2>Installation</h2>\n<p>Assuming you followed the Docker instructions above, you should have <code>nvidia-docker</code> available and working. The next step is to <a href="https://www.tensorflow.org/install/install_linux#gpu_support">install the correct Docker image</a>.</p>\n<p>We want the latest GPU version, so run:</p>\n<pre><code>nvidia-docker run -it gcr.io/tensorflow/tensorflow:latest-gpu bash\n</code></pre>\n<p>This command will find the Docker file (remotely or locally), spin it up and put you at a bash prompt. From there, you can <a href="https://www.tensorflow.org/install/install_linux#ValidateYourInstallation">validate your installation</a>.</p>\n<h2>Validating your installation</h2>\n<p>Start <code>python</code>:</p>\n<pre><code>python\n</code></pre>\n<p>Paste this program, <a href="https://www.tensorflow.org/install/install_linux#ValidateYourInstallation">provided by the TensorFlow docs</a>:</p>\n<pre><code># Python\nimport tensorflow as tf\nhello = tf.constant(\'Hello, TensorFlow!\')\nsess = tf.Session()\nprint(sess.run(hello))\n</code></pre>\n<p>If you see "Hello, TensorFlow!" you\'ll know it\'s installed correctly.</p>\n<h2>Jupyter</h2>\n<p>So we\'ve got TensorFlow installed and working, but inputting python commands one line at a time is a terrible way to program. A much better approach to get started is to use a Jupyter notebook.</p>\n<p><a href="http://jupyter.org/">A Jupyter notebook</a> is a web interface for documents containing code the evaluations of that code, displayed side by side on the page.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-2957c.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 59.6401028277635%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABO0lEQVQoz51Ti46CMBDk/38REwRjFKh9UV4KzjFr2uQuHjE2mWyhdHZndskGb6GUgvcebduiaRrZG2Nwv9+xLMsuHo8H5nkWhBCQ8XLXddBawzknYALGYRgEvPQfmHQcR4kkzbh5Pp+oqgplWeJ8PuN0OskzwaysZF3XVBX3vPMX5BJCrlgpZbM6SrbWynvGvu+lWiaYpgnvViKc5gXKKdxuN7S2hTJKLCAZ5XwKJkwVFnWBoihQVuXLw7D5GTx8578jpMTj8Yg8z3E4HHBtrzDOwHn3HaG2GtZpjJuP9Iw+7XX3HVKXueL8xebQfGZlJNgUvo/n8VueMfL8V1Ma08AaJw3xm3f0kBK6sJH3IQ3vHqgqEV70BXVdCyEJSNSP/UdEEVSUJHNcus07grMoc2he88fM8W/YA7/7AXovoWjiF5baAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="jupyter sample" title="" src="/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-17dec.png" srcset="/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-ae2e5.png 160w,\n/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-8227e.png 320w,\n/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-17dec.png 640w,\n/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-88536.png 960w,\n/static/jupyter-sample-4f3cb5bf6172304d6ffa8f8ce4009593-2957c.png 1167w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>The TensorFlow Docker image <a href="https://www.tensorflow.org/install/install_linux#gpu_support">supports Jupyter notebooks out of the box</a>. You\'ll use a similar command to spin up the Docker image with a few tweaks (If the previous Docker image is still running, shut it down with <code>ctrl-c</code>):</p>\n<pre><code>nvidia-docker run -it -p 8888:8888 gcr.io/tensorflow/tensorflow:latest-gpu\n</code></pre>\n<p>What this command does is tell docker to expose port <code>8888</code> (in Docker) on port <code>8888</code> (of your local machine). (Port <code>8888</code> is the Jupyter notebook\'s default port, if you were wondering.)</p>\n<p>To make sure that things are working as expected, open up another terminal on your box and run:</p>\n<pre><code>curl http://localhost:8888\n</code></pre>\n<p>If your machine is like mine, you won\'t see any output from this <code>curl</code> command, but you <em>should</em> see a request come in on the terminal running Docker, something like:</p>\n<pre><code>[I 02:05:57.912 NotebookApp] 302 GET / (xxx.xx.x.x) 0.22ms\n</code></pre>\n<p>You can access the Docker URL directly on your box. I use a laptop and prefer to access the PC remotely, so to do that, you\'ll need to be on the same wifi network as your Machine Learning PC and get it\'s IP.</p>\n<p>On your Machine Learning PC, type:</p>\n<pre><code>ifconfig\n</code></pre>\n<p>Look for an IP address that starts with <code>192.168.x.x</code>. On your laptop, you\'ll take the URL provided by Docker and replace <code>localhost</code> with this IP. So, if the Machine Learning box\'s IP is <code>192.168.1.1</code>, you would type in your browser something like:</p>\n<pre><code>http://192.168.1.1:8888/?token=7f6b36f9d6b15272c76003b8c1cdfcdf306dc52ff310\n</code></pre>\n<p>At this URL, you should see the Jupyter notebook:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-c7069.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 29.783549783549784%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAAAgElEQVQY06XQSw7DIAwEUN//piBSjM0nfKchUg+QdPE2XoxmTGcSeO+x1vpbzhnEzOCgYFF8WDDGeBVWSrlRjBGHDxCRm6pi357YCzfnHKi1BnMEOCngVF/PTSnBWguqtcJ6RT4bYmnX5Ik5n9tNjTGg3jtirujX794E/exi+11fltbWpRztUscAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="jupyter overview" title="" src="/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-17dec.png" srcset="/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-ae2e5.png 160w,\n/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-8227e.png 320w,\n/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-17dec.png 640w,\n/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-88536.png 960w,\n/static/jupyter-overview-864633103aa5f3d908269ca2a788469a-c7069.png 1155w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Having a Jupyter notebook handy will make it much easier to run through the TensorFlow tutorials.</p>\n<h1>Pytorch</h1>\n<p>The other machine learning tool we\'re going to install is PyTorch.</p>\n<p><a href="https://github.com/cdw/pytorch">PyTorch</a> was released in 2016 by <a href="https://twitter.com/fbOpenSource?ref_src=twsrc%5Etfw&#x26;ref_url=http%3A%2F%2Fpytorch.org%2F">Facebook\'s team</a>. It\'s still fairly new and changing quickly, but it\'s already picked up a lot of steam in the community.</p>\n<h2>Installation</h2>\n<p>Let\'s install the appropriate pytorch docker image. Run:</p>\n<pre><code>nvidia-docker run --rm -ti --ipc=host -p 8888:8888 pytorch/pytorch:latest\n</code></pre>\n<p>This puts you right at a bash prompt.</p>\n<p>I like learning via example, and <a href="http://pytorch.org/tutorials/beginner/pytorch_with_examples.html">luckily the Pytorch docs provide plenty of examples to learn from</a>. You can run through the tutorials by starting <code>python</code> and copy pasting code, but a Jupyter notebook is so much better. So let\'s get that working.</p>\n<h2>Jupyter</h2>\n<p>Jupyter doesn\'t come standard on the <code>pytorch</code> docker image, <a href="http://jupyter.org/install.html">but it\'s easy to install</a>. In your docker container (that you started above), type:</p>\n<pre><code>python3 -m pip install --upgrade pip\npython3 -m pip install jupyter\njupyter notebook\n</code></pre>\n<p>When I ran <code>jupyter notebook</code> for the first time, I got the following error:</p>\n<pre><code>OSError: [Errno 99] Cannot assign requested address\n</code></pre>\n<p>To fix this, I had to provide an explicit IP and allow root (<a href="https://github.com/ipython/ipython/issues/6193#issuecomment-350613300">hat tip to this comment</a>):</p>\n<pre><code>jupyter notebook --allow-root --ip=0.0.0.0\n</code></pre>\n<h3>Validating the Jupyter notebook</h3>\n<p>From another terminal, run curl:</p>\n<pre><code>curl http://localhost:8888\n</code></pre>\n<p>And make sure you see logs appear in Docker. If that works, try accessing in the browser at <code>http://192.168.x.xx:8888</code>.</p>\n<h3>Saving the Jupyter notebook</h3>\n<p><strong>IMPORTANT:</strong> If you exit docker now, you\'ll lose the installation of Jupyter you just performed. You need to commit those changes as (<a href="https://www.techrepublic.com/article/how-to-commit-changes-to-a-docker-image/">outlined in this article</a>) if you want to avoid installing every time you spin up the container.</p>\n<p>First, in another terminal, get the name of the container:</p>\n<pre><code>docker ps -l\n</code></pre>\n<p>This should give you the most recently created container, which should be PyTorch. Then, commit with:</p>\n<pre><code>docker commit &#x3C;CONTAINER_NAME> pytorch\n</code></pre>\n<p>Refer to our newly named container with:</p>\n<pre><code>nvidia-docker run --rm -ti --ipc=host -p 8888:8888 pytorch\n</code></pre>\n<p>And start up your notebook:</p>\n<pre><code>jupyter notebook --allow-root --ip=0.0.0.0\n</code></pre>\n<p>If that works, great! Try running through one or two of the tutorials to make sure everything\'s working.</p>\n\n  <a class="gatsby-resp-image-link" href="/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-e3b9c.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 111.63194444444444%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAAsSAAALEgHS3X78AAABpUlEQVQ4y62VCXOCMBCF+f9/sOMB5Ui4IdwIoq+7sVo7tVSomXmDKPl4mz002lIhTVPkea6vSimUZXlTVVWYpmlWwzAgyQL9vFEUhd50hTE4jmP9Y9d1aJpGb5gTP9f3vZbRdT1t6lHVNTKCFwRnSNu2i8Vggy3z8lKJIIoQZQlKgrNyclkT/N7BnA6HwxcwoDAlAUUYws9iiDRElGfacUXQxcCQQLbjwHFdSN9HrnIdxjOgh0BBkJ1lYWeasD0PCSVpCewnMJQwxTvc2IOqSn2GnKjVQC4fkxxaJA67pLNrn0zGQyADZBRCBoHOtlKFrsvVQEUd40gBEfhIqLiDKKbvLqFzphWJPzczifoG5E7Z7/c6ZL5uNhtIKf/hkMLzhEBIzuIkRr0wITfg9Ybr0LJtvJEzzxXYbrf6JUvEM8Fg6vl8hiB3JtUgFzPfr9HxeLwAeblUKnx+/Ja16xswoHLxqEPY4UuA7JCzy2fxEuD1DF8CPJ1OiKg7fBoQz4z83zSOIwymDuMEmfl6JnI3LB1bDws7ufujYt1GOw0Intjtp/4CfgBjnqd781YQWAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="pytorch output" title="" src="/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-17dec.png" srcset="/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-ae2e5.png 160w,\n/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-8227e.png 320w,\n/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-17dec.png 640w,\n/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-88536.png 960w,\n/static/pytorch-output-08924445659039f725b35f65f1e1cfe6-e3b9c.png 1152w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h1>Next steps</h1>\n<p>At this point, you should have both <a href="https://github.com/cdw/pytorch">PyTorch</a> and <a href="https://www.tensorflow.org/">TensorFlow</a> at your disposal.</p>\n<p>If you\'ve made it this far in the series, congratulations! You built a computer, installed an operating system, began mining cryptocurrencies, and set yourself up to begin training computers to do your bidding. You deserve a pat on the back!</p>\n<p>Where to go from here, you may ask? First, I\'d encourage you to subscribe:</p>\n<iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/96fcab/?as_embed"></iframe>\n<p>I\'m going to continue blogging my adventures learning this stuff, and I\'d love to share it with you.</p>\n<p>If you want an immediate next step, I\'d recommend <a href="https://www.coursera.org/learn/machine-learning">Andrew Ng\'s course</a>. It\'s a deep and thorough introduction to the field.</p>\n<p>Finally, I\'ve been collecting various machine learning links and resources to work through once I have a base of knowledge. Some of these may come in handy for you! (I haven\'t gone through all of these so I can\'t vouch for them - feel free to recommend others in the comments).</p>\n<hr />\n<p><a href="https://www.reddit.com/r/MachineLearning/comments/7nrzhn/d%5C_results%5C_from%5C_best%5C_of%5C_machine%5C_learning%5C_2017/?st=JBZ1N05J&#x26;sh=aa234160">https://www.reddit.com/r/MachineLearning/comments/7nrzhn/d_results_from_best_of_machine_learning_2017/?st=JBZ1N05J&#x26;sh=aa234160</a></p>\n<p><a href="http://www.wildml.com/2017/12/ai-and-deep-learning-in-2017-a-year-in-review/">http://www.wildml.com/2017/12/ai-and-deep-learning-in-2017-a-year-in-review/</a></p>\n<p><a href="https://explosion.ai/blog/prodigy-annotation-tool-active-learning">https://explosion.ai/blog/prodigy-annotation-tool-active-learning</a></p>\n<p><a href="http://blog.kaggle.com/2017/09/11/how-can-i-find-a-dataset-on-kaggle/">http://blog.kaggle.com/2017/09/11/how-can-i-find-a-dataset-on-kaggle/</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/6zvszj/another_keras_tutorial_for_neural_network/?st=J7JRX00A&#x26;sh=90a37148">https://www.reddit.com/r/learnmachinelearning/comments/6zvszj/another<em>keras</em>tutorial<em>for</em>neural_network/?st=J7JRX00A&#x26;sh=90a37148</a></p>\n<p><a href="https://www.reddit.com/r/MachineLearning/comments/70c5zd/n_google_launches_tensorboard_api_to_enhance/?st=J7MJ4JWJ&#x26;sh=2ece7122">https://www.reddit.com/r/MachineLearning/comments/70c5zd/n<em>google</em>launches<em>tensorboard</em>api<em>to</em>enhance/?st=J7MJ4JWJ&#x26;sh=2ece7122</a></p>\n<p><a href="https://medium.com/@ageitgey/machine-learning-is-fun-80ea3ec3c471">https://medium.com/@ageitgey/machine-learning-is-fun-80ea3ec3c471</a></p>\n<p><a href="https://www.wired.com/story/when-websites-design-themselves/">https://www.wired.com/story/when-websites-design-themselves/</a></p>\n<p><a href="https://chatbotsmagazine.com/contextual-chat-bots-with-tensorflow-4391749d0077">https://chatbotsmagazine.com/contextual-chat-bots-with-tensorflow-4391749d0077</a></p>\n<p><a href="https://medium.com/machine-learning-for-humans/supervised-learning-740383a2feab">https://medium.com/machine-learning-for-humans/supervised-learning-740383a2feab</a></p>\n<p><a href="https://medium.com/intuitionmachine/the-brute-force-method-of-deep-learning-innovation-58b497323ae5">https://medium.com/intuitionmachine/the-brute-force-method-of-deep-learning-innovation-58b497323ae5</a></p>\n<p><a href="https://hackernoon.com/how-i-started-with-learning-ai-in-the-last-2-months-251d19b23597?source=userActivityShare-f31f03e60056-1506529741">https://hackernoon.com/how-i-started-with-learning-ai-in-the-last-2-months-251d19b23597?source=userActivityShare-f31f03e60056-1506529741</a></p>\n<p><a href="https://github.com/rhdeck/bostonai/blob/master/README.md">https://github.com/rhdeck/bostonai/blob/master/README.md</a></p>\n<p><a href="http://nicodjimenez.github.io/2017/10/08/tensorflow.html">http://nicodjimenez.github.io/2017/10/08/tensorflow.html</a></p>\n<p><a href="https://www.reddit.com/r/hackernews/comments/7dlltw/a_cookbook_for_machine_learning_vol_1/?st=JA5IEFE8&#x26;sh=b5513326">https://www.reddit.com/r/hackernews/comments/7dlltw/a<em>cookbook</em>for<em>machine</em>learning<em>vol</em>1/?st=JA5IEFE8&#x26;sh=b5513326</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/7dcog4/neural_networks_for_beginners_popular_types_and/?st=JA2YU96R&#x26;sh=fc6787ce">https://www.reddit.com/r/learnmachinelearning/comments/7dcog4/neural<em>networks</em>for<em>beginners</em>popular<em>types</em>and/?st=JA2YU96R&#x26;sh=fc6787ce</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/7centc/learning_machine_learning_01_machine_learning/?st=J9WVF138&#x26;sh=9b166f71">https://www.reddit.com/r/learnmachinelearning/comments/7centc/learning<em>machine</em>learning<em>01</em>machine_learning/?st=J9WVF138&#x26;sh=9b166f71</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/7c8ogk/simple_deep_learning_model_for_stock_price/?st=J9W5R9AZ&#x26;sh=22315e0b">https://www.reddit.com/r/learnmachinelearning/comments/7c8ogk/simple<em>deep</em>learning<em>model</em>for<em>stock</em>price/?st=J9W5R9AZ&#x26;sh=22315e0b</a></p>\n<p><a href="http://blog.kaggle.com/2017/11/27/introduction-to-neural-networks/">http://blog.kaggle.com/2017/11/27/introduction-to-neural-networks/</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/7g5zx9/predicting_cryptocurrency_prices_with_deep/?st=JAK71BXS&#x26;sh=a283370f">https://www.reddit.com/r/learnmachinelearning/comments/7g5zx9/predicting<em>cryptocurrency</em>prices<em>with</em>deep/?st=JAK71BXS&#x26;sh=a283370f</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/7he36r/what_is_nlp_get_started/?st=JARMLMP7&#x26;sh=2886d0a9">https://www.reddit.com/r/learnmachinelearning/comments/7he36r/what<em>is</em>nlp<em>get</em>started/?st=JARMLMP7&#x26;sh=2886d0a9</a></p>\n<p><a href="https://www.reddit.com/r/learnmachinelearning/comments/7h7grz/essential_guide_to_keep_up_with_aimlcv/?st=JARCN2DT&#x26;sh=fe113479">https://www.reddit.com/r/learnmachinelearning/comments/7h7grz/essential<em>guide</em>to<em>keep</em>up<em>with</em>aimlcv/?st=JARCN2DT&#x26;sh=fe113479</a></p>\n<p><a href="http://blog.kaggle.com/2017/12/06/introduction-to-neural-networks-2/">http://blog.kaggle.com/2017/12/06/introduction-to-neural-networks-2/</a></p>\n<p><a href="https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/preview?imm_mid=0f9b7e&#x26;cmp=em-data-na-na-newsltr_20171213&#x26;slide=id.g183f28bdc3_0_90">https://docs.google.com/presentation/d/1kSuQyW5DTnkVaZEjGYCkfOxvzCqGEFzWBy4e9Uedd9k/preview?imm<em>mid=0f9b7e&#x26;cmp=em-data-na-na-newsltr</em>20171213&#x26;slide=id.g183f28bdc3<em>0</em>90</a></p>',frontmatter:{date:"January 01, 2018",path:"/deep-learning-cryptocurrency-pc-4-ai/",title:"Noob's Guide to building a Deep Learning / Cryptocurrency PC (#4): AI"}}},pathContext:{}}}});
//# sourceMappingURL=path---deep-learning-cryptocurrency-pc-4-ai-3fa219428733c6ead179.js.map