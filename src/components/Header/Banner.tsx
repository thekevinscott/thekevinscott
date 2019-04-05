import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';
import NewsletterSignup from './NewsletterSignup';
import * as styles from './styles.module.scss';

interface IProps {
}

const publishDate = new Date('2019-02-19 08:00:00');

const getPublished = () => {
  const date = new Date();
  return date.getTime() > publishDate.getTime();
};

const getText = () => {
  const published = getPublished();
  if (published) {
    return (
      <React.Fragment>
        I just published "<strong>Deep Learning With Javascript</strong>: A Hacker's Guide to Getting Started With Neural Networks". <span>On sale now!</span>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      February 19th my new book, "<strong>Deep Learning With Javascript</strong>: A Hacker's Guide to Getting Started With Neural Networks". <span>Pre-order now!</span>
    </React.Fragment>
  );
}

class Banner extends Component<IProps> {
  render() {
    return (
      <div className={styles.banner}>
        <a href="https://dljsbook.com" target="_blank">
          {getText()}
        </a>
      </div>
    );
  }
}

export default Banner;
