import React from 'react';
import Header from 'components/Header';
import styles from './styles.module.scss';
import cover from './dljscover.png';

interface IQuestionProps {
  question: string;
  children: JSX.Element|string|(string|undefined|JSX.Element)[];
}

const Price = () => (
  <span>$29</span>
);

const Question = ({
  question,
  children,
}) => (
  <>
    <p><strong>{question}</strong></p>
    {children}
  </>
);

const BuyButton = () => (
  <div className={styles.buyContainer}>
    <a
      className={styles.button}
      target="_blank"
      href="https://gum.co/dljsbook"
    >
      Buy <span>(<Price />)</span>
    </a>
  </div>
);

const IndexPage = () => (
  <>
    <Header visible={true} className={styles.header} />
    <div className={styles.jumbotron}>
      <div>
        <img src={cover} />
        <div>
          <h1>Today is the day you build a <span>Neural Network</span> in Javascript.</h1>
          <p>Deep Learning is ushering in a sea change in the way we build software. Andrew Ng famously refers to AI as the "New Electricity": a change destined to become as ubiquitous as electricity, imbued in every product around us, that will revolutionize how we interact with technology.</p>
          <p>Deep Learning has traditionally required vast server farms of specialized GPU chips, a PhD degree, and huge petabytes of data. Recently, - just in the past year - its become feasible to deploy and train cutting-edge Neural Networks in your browser, using Javascript. </p>
          <BuyButton />
        </div>
      </div>
      <h2 className={styles.headline}><span>Deep Learning in Javascript</span> will teach you how to build a Neural Network in your browser, today.</h2>
    </div>
    <div className={styles.section}>
      <div className={styles.contents}>
        <h2>The Future of Deep Learning Is Your Browser and Phone</h2>
        <p>Consider: </p>
        <ul>
          <li>Apple's new NPU chip - specialized for Deep Learning - features a 60x increase over the 2017 model. We're just in the opening rounds of specialized hardware bringing AI to your computer and phone.</li>
          <li>Consumers are more conscious of privacy than ever before. Techniques that can keep Deep Learning on-device, without ever hitting a remote server, allow you to leverage Deep Learning techniques without handling people's data.</li>
          <li>Many types of sensor data - video, audio, or cutting-edge AR and VR techniques - are too big and slow to send back and forth to a remote server for realtime processing. Leveraging Deep Learning in the browser lets you handle sensor data in realtime with no lag.</li>
        </ul>
        <p>Deep Learning is coming to the computer on your desk and the phone in your pocket. And guess which technology is well positioned to take advantage of this change? You guessed it: Javascript.</p>
        <BuyButton />
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.contents}>
        <h2>What This Book Covers</h2>
        <p>This book is aimed at teaching Javascript developers how to leverage Deep Learning in the browser today. It's aimed at hackers looking to jump in quickly and learn through coding.</p>
        <p>This book includes:</p>
        <ul>
          <li>An overview of how Deep Learning works, various approaches and when to use them</li>
          <li>Techniques for manipulating, cleaning, and processing datasets, and how to effectively work with smaller datasets</li>
          <li>How Image Recognition works, and how to interpret what a Neural Network "sees" when it looks at an image</li>
          <li>How to effectively train a model in your browser, and tune it for better performance</li>
          <li>How to take models built by others and leverage them in your apps, tweaking them for your specific use case</li>
          <li>A step-by-step walkthrough of how to build an Image Classifier in your browser, from scratch</li>
        </ul>
        <p>Today is the day you build a Neural Network in Javascript.</p>
        <BuyButton />
      </div>
    </div>
    <div className={styles.section}>
      <div className={styles.contents}>
        <h2>Table of Contents</h2>
        <ol>
          <li>What is Deep Learning</li>
          <h3>Inference</h3>
          <li>Making Predictions</li>
          <li>Data & Tensors</li>
          <li>Preparing Image Data</li>
          <h3>Training</h3>
          <li>Training Your Neural Network</li>
          <li>Training From Scratch</li>
          <li>Working With Non-Linear Data</li>
          <li>Structured Data</li>
          <li>Recognizing Images</li>
          <li>Transfer Learning with ImageNet</li>
        </ol>
      </div>
    </div>

    <div className={styles.section}>
      <div className={styles.contents}>
        <h2>FAQ</h2>

        <Question question="What happens after I purchase?">
          <p>You'll receive an email delivery with the PDF, Kindle (.mobi), and .epub files. You'll also be subscribed to receive future updates of the book for free.</p>
        </Question>

        <Question question="Do I need a math or statistics background to use this book?">
          <p>No! Math or Statistics background is not required. We will touch on theory as it applies to the Deep Learning models you will build, but there will be little-to-no math or statistics.</p>
        </Question>

        <Question question="Do I need to know Javascript to use this book?">
          <p>We'll be using modern Javascript to demonstrate techniques and build the Neural Networks and spending little time delving into Javascript. However, a passing familiarity should be all you need.</p>
        </Question>

        <Question question="What if this book is too advanced for me?">
          <p>Unlimited money-back guarantee: if you're not happy with your purchase, email kevin@hitheory.com and you will get your money back, no questions asked (well, I will ask you how the book could be improved!)</p>
        </Question>

        <Question question="What if this book is not advanced enough for me?">
          <p>Take advantage of the unlimited money-back guarantee!</p>
        </Question>

        <Question question="What if I buy this book today, and next year it's out of date?"> 
          <p>Buying the book today guarantees you unlimited access to future updates in digital format.</p>
          <p>Also, though the tools will change, the basics of building a Neural Network and techniques for training and tuning will stay the same.</p>
        </Question>
        <BuyButton />
      </div>
    </div>
  </>
);

export default IndexPage;

