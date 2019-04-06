import React, { Component } from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";
import GridHeader from "./GridHeader";
import Footer from "components/Footer";
import Header from "components/Header";
import * as styles from './styles.module.scss';
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from "../utils";

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
          <div
            className={styles.content}
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

