import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import Img from "gatsby-image";
import ArticleHeader from "./ArticleHeader";
import Header from 'components/Header';
import Footer from "components/Footer";
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from "../utils";
import * as styles from './styles.module.scss';
import {
  LIGHT_GRAY,
} from "layouts/constants";

class Simple extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        html: PropTypes.any.isRequired,
        htmlAst: PropTypes.any.isRequired,
      }).isRequired,
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
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
      visible,
    } = this.props;

    const {
      title,
      description,
      path,
      image,
      author,
      keywords,
      form,
      tags,
      credit,
      timeToRead,
      date,
    } = getPostData(post, siteMetadata);

    return (
      <React.Fragment>
        <Header visible={visible} />
        <div className={styles.container}>
          {writeMetaTags({ post, siteMetadata })}
          <ArticleHeader
            image={image}
            caption={credit}
            title={title}
            timeToRead={timeToRead}
            date={date}
          />
          <div className={styles.content}>
            {children}
            <hr className="line" />
          </div>
          <Footer
            path={path}
            form={form}
            subscriberTags={getSubscriberTags({
              post,
              siteMetadata,
            })}
          />
        </div>
      </React.Fragment>
    );
  }
}

  export default Simple;
