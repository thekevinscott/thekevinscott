import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Content from "./Content";
import GridHeader from "./Header";
import Footer from "components/Footer";
import Header from "components/Header";
import * as styles from './styles.module.scss';
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from "../utils";
import {
  LIGHT_GRAY,
} from "layouts/constants";

const FOOTER_TAG = "Thanks for reading. If you like what you've read, stay in touch! You can subscribe below.";

class Grid extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const {
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

    const __html = [
      post.html,
      `
      <hr />
      <p>${FOOTER_TAG}</p>
      `,
    ].join("");

    return (
      <React.Fragment>
        <Header visible={visible} />
        <div className={styles.container}>
          {writeMetaTags({ post, siteMetadata })}
          <GridHeader
            image={image}
            credit={credit}
            title={title}
            timeToRead={timeToRead}
            date={date}
          />
          <Content
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html }}
          />
          <Footer
            path={path}
            form={form}
            subscriberTags={getSubscriberTags({ post, siteMetadata })}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default Grid;

