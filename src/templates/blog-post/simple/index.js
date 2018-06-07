import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Content from "./Content";
import Header from "./Header";
import Footer from "components/Footer";
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from "../utils";
import {
  LIGHT_GRAY,
} from "layouts/constants";
import Tags from "components/Tags";

const Container = styled.div `
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

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
          author: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          keywords: PropTypes.arrayOf(PropTypes.string).isRequired,
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
      <Container className="simple">
        {writeMetaTags({ post, siteMetadata })}
        <Header
          image={image}
          credit={credit}
          title={title}
          timeToRead={timeToRead}
          date={date}
        />
        <Content
          className="blog-post-content"
        >
          {children}
          <hr className="line" />
        </Content>
        { /*
        <Tags tags={tags} />
        */ }
        <Footer
          form={form}
          subscriberTags={getSubscriberTags({
            post,
            siteMetadata,
          })}
        />
      </Container>
    );
  }
}

export default Simple;
