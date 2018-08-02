import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Footer from 'components/Footer';
import Header from 'components/Header';
import writeHeadTags from 'utils/writeHeadTags';
import SubscribeForm, {
  TENSORFLOWJS,
} from 'components/SubscribeForm';
import { pageView } from 'utils/mixpanel';
import * as styles from './styles.module.scss';

export default class Newsletter extends Component {
  componentDidMount() {
    pageView('/newsletter');
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata,
        }
      },
      visible,
    } = this.props;

    return (
      <div className={styles.container}>
        <Header visible={visible} />
        {writeHeadTags(siteMetadata)}
        <h1>My newsletter</h1>
        <p>I send a newsletter about design, AI and other cool stuff in 2018.</p>
        <p>If you love AI, JavaScript, and all things web, you'll feel right at home. I'm journaling my progress learning artificial intelligence after ten years of experience building web and mobile apps for brands like Venmo and GE Healthcare.</p>
        <SubscribeForm
          form={TENSORFLOWJS}
        />
      </div>
    );
  }
}
