webpackJsonp([0xdba1ff142433],{371:function(e,t){e.exports={data:{markdownRemark:{html:'<p>Among the buzzwords in the tech world of 2017, two tower above the rest: <strong>deep\nlearning</strong> and <strong>cryptocurrencies</strong>. It seems that everyone I know (in tech)\nwants to learn these things. And guess what — so do I! So much so that I\'m\nbuilding my own computer in order to facilitate that learning.</p>\n<p>What follows are my notes-to-self as I build a computer to learn about deep\nlearning and cryptocurrency mining. In the previous installments we discussed\n<a href="https://medium.com/@thekevinscott/noobs-guide-to-custom-computer-for-cryptocurrency-and-deep-learning-7caa255adfaf">assembling the\nhardware</a>\nand <a href="https://medium.com/@thekevinscott/noobs-guide-to-building-a-deep-learning-cryptocurrency-pc-2-the-os-39dd20bd9b21">installing the\nOS</a>.\nIn this installment I\'ll talk about how to set up a cryptocurrency miner and\nconnect to a pool.</p>\n<iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/96fcab/?as_embed"></iframe>\n<hr />\n<p>To recap, in case you\'re just getting started with this series: my goal in\npurchasing and building my own PC was to have hardware on hand to run machine\nlearning algorithms on, and bring myself up to speed on the exciting advances\nhappening in AI. But in between running training algorithms, my computer (and\nit\'s hungry hungry GPUs) will sit fallow. We can\'t have that!</p>\n<p>When I\'m not running the computer over training data, I want to have it mining.\nEven if it\'s making only a a little profit, it\'s still better than nothing.</p>\n<h1>Cryptocurrencies</h1>\n<p>Your first instinct when getting into mining might be to try and mine bitcoin.\nThis would almost certainly be a mistake.</p>\n<p>Bitcoin today is mined primarly via <a href="https://www.buybitcoinworldwide.com/mining/hardware/">ASICS\nhardware</a>, equipment\nspecialized for mining bitcoins and other cryptocurrencies (but mostly\nbitcoins). Unless your goal in life is to mine bitcoins — and I suppose there\'s\nnothing wrong with that — ASICS hardware is not a good investment. And without\nASICS hardware, it\'s hard to compete with the other miners.</p>\n<p>There are cryptocurrencies especially <a href="https://www.coindesk.com/scrypt-miners-cryptocurrency-arms-race/">designed to prevent mining via\nspecialized hardware, called scrypt\ncoins</a>:</p>\n<blockquote>\n<p>One of the biggest differences between scrypt and SHA-256 is that the former\nrelies heavily on computing resources aside from the processing unit itself,\nparticularly memory. Conversely, SHA-256 doesn\'t. This makes it difficult for\nscrypt-based systems to scale up and use lots of computing power, because they\nwould have to use a proportional amount of memory, and that is expensive. —\n<a href="https://www.coindesk.com/scrypt-miners-cryptocurrency-arms-race/">Danny Bradbury,\nCoindesk</a></p>\n</blockquote>\n<p>While more specialized hardware is beginning to come to market, you\'re probably\nsafe picking one of these scrypt currencies to mine. Ethereum is a good choice,\nso that\'s what I\'m going to start with.</p>\n<h1>The tools</h1>\n<p>To get started mining, you need\n<a href="https://github.com/ethereum/go-ethereum">ethereum</a>, a\n<a href="https://github.com/ethereum-mining/ethminer">miner</a>, and a <strong>wallet</strong> to send\nthe mined coins to.</p>\n<p>First, enable the ethereum repository:</p>\n<pre><code>sudo add-apt-repository -y ppa:ethereum/ethereum\nsudo apt-get update\n</code></pre>\n<p>Then, install ethereum:</p>\n<pre><code>sudo apt-get install ethereum\n</code></pre>\n<p>Next, you need to install the miner, <code>ethminer</code>. (There are other miners as\nwell, like qtMiner, cudaminer, eth-proxy). You can either install via <code>apt-get</code>\nor from source; because I\'m a masochist I chose the latter.</p>\n<p>Head on over to the <a href="https://github.com/ethereum-mining/ethminer/releases">releases\npage</a> and download the\nmost recent release:</p>\n<pre><code>wget \ntar xvzf ethminer-0.12.0-Linux.tar.gz\n</code></pre>\n<p>And then try running <code>ethminer</code>. You should see something like:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/ethminer-03f58a707a22b7b5a3e37172ccc022e2-0bc2f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 24.125000000000004%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAFCAIAAADKYVtkAAAACXBIWXMAAAsSAAALEgHS3X78AAAAqklEQVQY032QywrCMBBFK9gXtJoKXbhz6TOGvJrWNin1j9z4+960BVFQOITMDDP3zgS7o03ZENJmo/tCOyJtQuvoUoGY1uEZHxP7jBkzZnGQwV7MPIwoxRAxu5aelehy3r7L/3G6ItwmrEUbSK9Nxtt8HAEQLk8a+mAyMnrxFnxzJ2+FvGdqIMpBGS9RFuUPe794WrFVfcodFsbakMWISfZLOZlOMF/BK78ARMgsIzhd6EQAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="ethminer" title="" src="/static/ethminer-03f58a707a22b7b5a3e37172ccc022e2-17dec.png" srcset="/static/ethminer-03f58a707a22b7b5a3e37172ccc022e2-ae2e5.png 160w,\n/static/ethminer-03f58a707a22b7b5a3e37172ccc022e2-8227e.png 320w,\n/static/ethminer-03f58a707a22b7b5a3e37172ccc022e2-17dec.png 640w,\n/static/ethminer-03f58a707a22b7b5a3e37172ccc022e2-0bc2f.png 800w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>This is good! It\'s working, it just needs to be configured with options.</p>\n<p>Finally, the <strong>wallet</strong>. There\'s lots of wallets available, with Mist being the\nofficially supported version. You don\'t actually need your wallet to be local;\nit can be hosted anywhere, including on an exchange like Coinbase.</p>\n<h1>Pools</h1>\n<p>Mining cryptocurrencies is kind of like a bunch of people in a field of\nhaystacks looking for needles. Every so often somebody gets lucky and finds one,\nshouts it out to the world, and makes a chunk of money, and then the process\nrepeats.</p>\n<p>This is all well and good for that lucky finder, but — especially nowadays, when\nyou\'re <a href="https://qz.com/1055126/photos-china-has-one-of-worlds-largest-bitcoin-mines/">competing against industrial-strength mining\noperations</a>\n— the chances of you solving a particular cryptographic puzzle first are slim to\nnil. If you\'re a small fry like me, you\'re better off joining a mining pool.</p>\n<p>A mining pool allows a group of miners\' computers to join forces and work on\nearning cryptocurrency as a team. When a new coin is mined, the profits will be\nshared with the contributors based on the amount of computing power they put in.</p>\n<p><a href="https://www.buybitcoinworldwide.com/ethereum/mining-pools/">https://www.buybitcoinworldwide.com/ethereum/mining-pools/</a></p>\n<h2>ethermine</h2>\n<p>The first pool I joined was <a href="http://ethpool.org/">ethpool</a>, and I subsequently\nswitched to <a href="https://ethermine.org/">ethermine</a> (which appears to be running the\nsame code? it\'s unclear) as their payout scheme was more predictable.</p>\n<p>To start up mining, I ran:</p>\n<pre><code>./ethminer --farm-recheck 200 --cuda-parallel-hash 8 --cuda-grid-size 1024 --cuda-streams 16 --cuda-block-size 128 -G -S us1.ethermine.org:4444 -FS eu1.ethermine.org:4444 -O &#x3C;My_Ethereum_Address>.&#x3C;My_RigName>\n</code></pre>\n<p>Here\'s the definitions for each option:</p>\n<ul>\n<li><code>farm-recheck</code> — <em><n> Leave n ms between checks for changed work (default: 500).\nWhen using stratum, use a high value (i.e. 2000) to get more stable hashrate\noutput</em></li>\n<li><code>cuda-parallel-hash</code> —** <em>**Define how many hashes to calculate in a kernel, can\nbe scaled to achieve better performance. Default=4</em></li>\n<li><code>cuda-block-size</code> — <em>Set the CUDA block work size. Default is 128</em></li>\n<li><code>cuda-grid-size</code> — <em>Set the CUDA grid size. Default is 8192</em></li>\n<li><code>cuda-streams</code>— <em>Set the number of CUDA streams. Default is 2</em></li>\n</ul>\n<p>My understanding of <code>farm-recheck</code> is, it\'s an for <a href="https://forum.ethereum.org/discussion/5379/mining-parameters">option to set how often the\nprogram checks</a>\nfor new work to work through. The lower you set it, the lower the chances of\nworking on stale blocks, but set it too low and you might see instability in the\nhashing output.</p>\n<p><em>The other options I\'m not 100% familiar with, and so I just went with the\ndefaults. Feel free to leave a comment if you have a plain english explanation\nof them.</em></p>\n<p>Finally, you\'ll pick the servers to connect to — I chose <code>us1</code>and <code>eu1</code> — and\nfinally put in your wallet address and a name to identify your mining computer.\nYou may need to open up the ports <code>4444</code> on your machine to allow connections.</p>\n<p><em>If you\'re having trouble with ethminer, there\'s an active *<a href="https://gitter.im/ethereum-mining/ethminer">Gitter\nroom</a></em> as well.*</p>\n<p>Once you start mining, you can go to your miner page and check out your stats.\nFor instance, the <a href="https://ethermine.org/miners/45d961bddef7bd389d76b22907eb4856a4383aa6">dashboard view\nshows</a>:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/miner-dashboard-1984622f0be254d2d246574d9ca88202-0bc2f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 181.99999999999997%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAIAAAAGkY33AAAACXBIWXMAAAsSAAALEgHS3X78AAAD50lEQVRIx51Vy27bVhDl19gwRdKJE9mJ7Vji4/It8U2KIiVZb1dFmsiwGyeOky67KFAkDYoC3rRAN003bVdtvMmn9ZBUVFu1nTjA0cXh3DmcucO5I6q0Y1+KOyTUm1+QYMjx7lU+FH6KpOhENmVZIzKIQWRLJjWZEEmFEVCIYuR2jSh1mcCCrUx84m+9f7j+fo8ry9GGFm+a6argYb0tBVcF/C9yRdJtVQaYinNTUMdfWmffW+9eR+/epGevPPAktq0f/0h/+Yc/fs0fBsnpwP4hcUX7bc36PU4KvLWcA8Wi/Gb6ZH/89XSENSP7I8mKmqd/9X89U1+80Y5ao5+/av40rCrhNB3vt/emrfF+Ds9KqR2r0xgdpJMng+mLeHwY9Kcbaux1H/cePUepq07X6z02k8m6GsMNGO6/TCdHILzbo+7Kje1a+zxui4F/8ir99lRIHpaVaMtMN43klugvuJWVBvXRkl5X7f+bpGAg+oMde1cORxV7l4RD5M873cvFoteHE1t1Od5hqxlAuIIIDiuFLO+yYpDt5mBIA5yp2hSaQW9OKk6H0+sAYzdY02HsmDVd1qyXnDbt95h6WPI6nFYHWNNjTZ+pR4xoUaiE030k+ENWRASPkVsMaTJixMgpbQwZKWbFiNb7nBhUaxFfBxqC4fGGVyYehdxwAZSgJ1gxb8WibAi6LSq6qFmSVkN3g0tqTVQMTm2xpMkJPrCK2yJGs4IxlWzlSPOenmxm3yatqA7Iltm6b6Rrhg8LHvFdFwuGL8YpaUmKaaVDK+1sVbsluV2SWytaf0Uf0MourfXxCICvaD1a65WEMK+2P6CDw+XgaDk6Xg6fZQRonMwIjJn9KNsCgSV8uhw9X9GHFFtx0GifKS7Spv0DWJfC46Xw2VKuWWqczAgs+RszkouXgqcgOE4m5njvPrG3ZWtLtoGKEZh+6rpuzQ0NP6m4vhmkoulvYkupbyuZG3gZ3zkbV6ghSTJIySK5hvMBdYdEuDQcerPqznrzHLnGmE2Su3KUzS3eBbgc58nqRXKeQ5+lDf1nRp631wJoPtzQmmgs3LYb3OcC2/U2ehMrhsbciCFjJJMCD6wO9emD9pbgq4293/78u8DBN99Ra1KA9PBKtTFek0I0jOD2cCSMBxQSFowK7KIL4Zbten285UG9jZNTq7ynROOizzAYUEYQnBMvBYEdwxT/IbDjFYUb1q1aC8JMjJh4xnDNxR4IxHAt/NZnYu+C2PwgLiLPxWUlvhBZa87E0ieI4Z2Lw8XI0mVpXzzzTDxP+/LIV4jd4szzyBs3OvMHcXBd2ubFas/TnolJCDIXry5EztP+F+BLZ+Cptk9iAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="miner dashboard" title="" src="/static/miner-dashboard-1984622f0be254d2d246574d9ca88202-17dec.png" srcset="/static/miner-dashboard-1984622f0be254d2d246574d9ca88202-ae2e5.png 160w,\n/static/miner-dashboard-1984622f0be254d2d246574d9ca88202-8227e.png 320w,\n/static/miner-dashboard-1984622f0be254d2d246574d9ca88202-17dec.png 640w,\n/static/miner-dashboard-1984622f0be254d2d246574d9ca88202-0bc2f.png 800w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n<p>Which gives you a nice overview of your stats, and also a rough estimate of your payouts:</p>\n\n  <a class="gatsby-resp-image-link" href="/static/payouts-9845c07fd92d393c9f11900497d0bce8-0bc2f.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; ; max-width: 640px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 156.125%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAfCAIAAABoLHqZAAAACXBIWXMAAAsSAAALEgHS3X78AAADoElEQVQ4y51VWW/TQBDOP+kBLbGdOCVt07SFJL6vpHZjJ3bipCktuQqlIEGLBA8IISEhXngCIXgAXhAvlOMH8u2uW662HNJkNZ6Zb3Zm99tJSih5p4lU37q0tiFK9dMCUvgVpaqpGYZqWJquq6ZBdUfXvZrru56uWcSiGbamq6qJFcGyYiXgBT1ctqIdT3rRW33eW33SWinozXk1yJbcXNkVSy4UsUwkS4UpCTgn+3NKENnq3aB84Jf2vDIsOTnIlNfPltQZPf9RUkW7bYRDMxo67R2rNTKi4bzW/FswfqLkz6nNjETrlAJejjKVOvmUAkH6XrwgNYQjIxEGvqg0ckbMm5uI4I1Nzt7mtQ6vd2BhxkzF56wt3ugxCxGjJ5Tr9MAkX7R6nNMXlIiz+1x1CP1IBoLc5OyrRMcK15GXVyICXql2c2Y3XRulnUG6OoIDOgchoYPjRMSFz+qARNZGvNpmPddFs/vDbn8lvBLSntVGztr4TzBOe9mJC1Z7yY6XrHbhSIp2XDBb83ooyj4kr4X4RMAiVjvOqw0CxnmKlTopPhE/W6GrGgFPLonearaynkVk4q1jBUliNbgqrV+R/S08I63R15sDub4l+9slt+fEY1AIdiMcgLC/kgSJwWRkOl5RDy6PyZwc0KKIflzCTwyDA52cQH3wDLTROgnD5PAnLwOjepwEKCWoJIWgtpgbR0rAehdZYOStbaIoIViYAVUZw8gJmy2uNp7ZeCwoyNJFFnBwNryfdm+kvb3Z8B6oRta1a2l3N71+ixDRGSbvedHuTO+8nrz14dz2swv+HcDOX3k6tft26ub76dHLydsfp3bfTV1/A316/AqRkJn4YdJzwetP7H+ZOPg6cedw8vbhxP4nojPL/meyfle+EPv+55n4UTIM5ow43X7wT8JVxwkYPeNh/nITvNSE/cQxgINcNKIUjhrcvqgEZ0wMzBakzqtNNu1w88k9A1aNyQBacTpg2zKl97LiQl+pdopWG0GYTXZ7bLfGWGvdayDfErWTnQFDXPY3ArHysMqUnmqjD6oCyfKiBDoMHHDIAxMv1TbQCUYiUzDPWQqUg8qxG4pnpwNvQs+ytwkHcwOAN4jekBEReBuwYyukRhiDoXnYE/BqrbtgRCgjAWshQtEt4i6v9RCKIsEFvC28GcAQAz0BoyoyQEEVs0XB5FSBxCfqz2tNpKOPpyXSJ4Rt2BUmZRdp2UW6c56CMVswMfAvecZ/wDcT4AMrl67w8gAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="payouts" title="" src="/static/payouts-9845c07fd92d393c9f11900497d0bce8-17dec.png" srcset="/static/payouts-9845c07fd92d393c9f11900497d0bce8-ae2e5.png 160w,\n/static/payouts-9845c07fd92d393c9f11900497d0bce8-8227e.png 320w,\n/static/payouts-9845c07fd92d393c9f11900497d0bce8-17dec.png 640w,\n/static/payouts-9845c07fd92d393c9f11900497d0bce8-0bc2f.png 800w" sizes="(max-width: 640px) 100vw, 640px">\n    </span>\n  </span>\n  \n  </a>\n    \n<h2>Tuning</h2>\n<p>Once you\'ve got your rig mining, you may want to squeeze out every ounce of\nprocessing power. If so, here\'s a few links to point you in the right direction!</p>\n<h3>The awesome wiki article at <code>/r/EtherMining</code>:</h3>\n<p><a href="https://www.reddit.com/r/EtherMining/wiki/index">https://www.reddit.com/r/EtherMining/wiki/index</a></p>\n<h3>A conversation on overclocking:</h3>\n<p><a href="https://bitcointalk.org/index.php?topic=1712831.0">https://bitcointalk.org/index.php?topic=1712831.0</a></p>\n<h3>A few articles about tweaking miners:</h3>\n<p><a href="https://robekworld.com/hash-rate-improvement-with-nvidia-asus-1060-1070-gpu-for-ether-like-mining-gpu-tweak-ii-e3cde220812f">https://robekworld.com/hash-rate-improvement-with-nvidia-asus-1060-1070-gpu-for-ether-like-mining-gpu-tweak-ii-e3cde220812f</a></p>\n<p><a href="http://www.legitreviews.com/geforce-gtx-1070-ethereum-mining-small-tweaks-great-hashrate-low-power_195451">http://www.legitreviews.com/geforce-gtx-1070-ethereum-mining-small-tweaks-great-hashrate-low-power_195451</a></p>\n<p><a href="http://cryptomining-blog.com/7341-how-to-squeeze-some-extra-performance-mining-ethereum-on-nvidia/">http://cryptomining-blog.com/7341-how-to-squeeze-some-extra-performance-mining-ethereum-on-nvidia/</a></p>\n<h3>How about writing your own miner?</h3>\n<p><a href="https://www.reddit.com/r/ethereum/comments/7caqpb/a_tiny_miner_i_wrote_to_understand_how_mining/?sh=f25cfa84&#x26;st=J9W5B865&#x26;utm_content=title&#x26;utm_medium=post_embed&#x26;utm_name=ef770faa323446d0909650522f22e37a&#x26;utm_source=embedly&#x26;utm_term=7caqpb">https://www.reddit.com/r/ethereum/comments/7caqpb/a<em>tiny</em>miner<em>i</em>wrote<em>to</em>understand<em>how</em>mining/?sh=f25cfa84&#x26;st=J9W5B865&#x26;utm<em>content=title&#x26;utm</em>medium=post<em>embed&#x26;utm</em>name=ef770faa323446d0909650522f22e37a&#x26;utm<em>source=embedly&#x26;utm</em>term=7caqpb</a></p>\n<hr />\n<p>And that\'s what you need to get a mining rig set up! Piece of cake, right? The\ngood news is once it\'s set up you can just sort of let it run without touching\nit. Just make sure nobody trips over the power cable.</p>\n<p>The final installment of this series will be about getting some basic AI\nlearning algorithms running on the hardware. If you want to hear about those,\ndrop your email below and I\'ll let you know when I publish it!</p>\n<iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/96fcab/?as_embed"></iframe>',frontmatter:{date:"December 10, 2017",path:"/deep-learning-cryptocurrency-pc-4-ai/",title:"Noob's Guide to building a Deep Learning / Cryptocurrency PC (#3): Mining",image:{childImageSharp:{sizes:{src:"/static/cover-a527d56efc463b585d5200c005e2e7a1-58b12.jpg",srcSet:"/static/cover-a527d56efc463b585d5200c005e2e7a1-9615e.jpg 600w,\n/static/cover-a527d56efc463b585d5200c005e2e7a1-58b12.jpg 700w",sizes:"(max-width: 700px) 100vw, 700px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---deep-learning-cryptocurrency-pc-4-ai-0fa8e81b743818ef7bb6.js.map