webpackJsonp([98502568430079],{566:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Essays by Kevin Scott",author:"Kevin Scott",description:"Essays exploring the intersection of Design & Artificial Intelligence",keywords:"Artificial Intelligence, Design, Pytorch, TensorFlow, Deep Learning, Kaggle",url:"https://thekevinscott.com"}},markdownRemark:{html:'<p>Before I started learning about AI, I thought that training a neural network meant training from scratch. Want to train a network to recognize dogs? Feed it 10,000 dogs and watch it go. Want to recognize images of malignant tumors in a CT scan? Collect a bunch of medical images and train away. I didn\'t realize you could take the models trained on one set of images and apply them to another, entirely unrelated set. Turns out this is exactly what you can do!</p>\n<p>I\'ve been working through the <a href="http://fast.ai" target="_blank" rel="nofollow noopener noreferrer">fast.ai</a> courses, and one of the very first assignments begins by leveraging a pre-trained model (specifically <a href="https://www.kaggle.com/keras/vgg16" target="_blank" rel="nofollow noopener noreferrer">VGG16</a>, trained to identify 1000 categories of images based on the <a href="http://www.image-net.org" target="_blank" rel="nofollow noopener noreferrer">corpus of data from ImageNet</a>). You consume the outputs of the VGG16 model, and use that to inform your custom model to predict whether something is a cat or a dog. So you\'re basically taking the predictions from an existing model, and layering another layer of predictions on top of that.</p>\n<p>It makes perfect sense that you\'d build models like this; why train from scratch if someone has already done the training work beforehand? At its lower levels, <a href="https://youtu.be/6kwQEBMandw?t=9m25s" target="_blank" rel="nofollow noopener noreferrer">VGG16 is already capable of recognizing patterns like lines, circles, gradients</a>, as well as hundreds of other features. These patterns appear in all images, and so retraining from scratch is redundant.</p>\n<p>I could see adapting this for speech recognition. Imagine you\'re training a model to teach native English speakers to speak Spanish. Instead of training your model from scratch, you could leverage a pre-trained model that already recognizes human voices. Maybe you also leverage a model that understands English and Spanish. Your final model might be a thin layer on top of both of these pre-existing models, that specifically learns how to interpret English accents mangling Spanish words.</p>\n<p>I wonder how this will affect design.</p>\n<p>There\'s been some work around <a href="https://blog.floydhub.com/turning-design-mockups-into-code-with-deep-learning/" target="_blank" rel="nofollow noopener noreferrer">turning design mockups into code with deep learning</a>. Imagine starting with a hand-drawn sketch as your base. You click around the sketch, nudging, encouraging and discouraging the AI: "No no, that button should open a new page", or "that link should create a new widget". You could use pre-trained models to help you where appropriate. Building a <a href="https://en.wikipedia.org/wiki/Create,_read,_update_and_delete" target="_blank" rel="nofollow noopener noreferrer">CRUD app</a>? Grab a pre-built model off the shelf that knows how to create, delete, and update. How about Uber for dogs? Grab a pre-built Uber model, and train a new layer on top to recognize dogs instead of humans.</p>\n<blockquote>\n<p>This is the cool thing about neural networks: you don’t have to tell them what to find. They decide what they want to find in order to solve your problem. — <a href="https://www.youtube.com/watch?v=6kwQEBMandw&#x26;feature=youtu.be&#x26;t=12m22s" target="_blank" rel="nofollow noopener noreferrer">Jeremy Howard</a></p>\n</blockquote>\n<p>This layered approach to making neural nets smarter - by building on the shoulders of other, pre-trained nets - it blows my mind. It feels like programming from the future. In a future language we could use increasingly abstract language to describe the parameters of what the computer should achieve, and then let the computer figure it out, similar to how nowadays we write instructions that are then interpreted into 0\'s and 1\'s.</p>',timeToRead:2,excerpt:"Before I started learning about AI, I thought that training a neural network meant training from scratch. Want to train a network to recognize dogs? Feed it 10,000 dogs and watch it go. Want to recognize images of malignant tumors in a CT scan…",frontmatter:{date:"2018-01-23 12:00:00.000 EST",path:"/shoulders-of-giants/",title:"Standing on the shoulders of giants",image_credit:null,image:{childImageSharp:{sizes:{src:"/static/cover-733599d18b25bdf865d7644add9f61f9-64523.jpg",srcSet:"/static/cover-733599d18b25bdf865d7644add9f61f9-acf4b.jpg 600w,\n/static/cover-733599d18b25bdf865d7644add9f61f9-d6590.jpg 1200w,\n/static/cover-733599d18b25bdf865d7644add9f61f9-64523.jpg 2400w,\n/static/cover-733599d18b25bdf865d7644add9f61f9-34c08.jpg 3600w,\n/static/cover-733599d18b25bdf865d7644add9f61f9-5e0f7.jpg 4027w",sizes:"(max-width: 2400px) 100vw, 2400px"}}}}}},pathContext:{}}}});
//# sourceMappingURL=path---shoulders-of-giants-c5961fddec0e92a2dc1d.js.map