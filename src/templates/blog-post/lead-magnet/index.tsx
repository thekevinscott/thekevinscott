import React, { Component } from 'react';
import WebFont from 'webfontloader';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from '../utils';
import * as styles from './styles.module.scss';

class LeadMagnet extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        html: PropTypes.any.isRequired,
        htmlAst: PropTypes.any.isRequired,
      }).isRequired,
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string.isRequired,
          author: PropTypes.string,
          description: PropTypes.string,
          keywords: PropTypes.string,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    children: PropTypes.any,
  };

  render() {
    const {
      children,
      data: {
        markdownRemark: post,
        site: {
          siteMetadata,
        },
      },
    } = this.props;

    const {
      title,
      subtitle,
    } = getPostData(post, siteMetadata);

    return (
      <div className={styles.parent}>
        <Header visible={true} />
        <div className={styles.container}>
          {writeMetaTags({ post, siteMetadata })}
          <div className={styles.article}>
            {children}
          </div>
        </div>
      </div>
    );
  }
}

export default LeadMagnet;
