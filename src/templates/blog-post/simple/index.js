import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Content from "./Content";
import SimpleHeader from "./Header";
import Header from 'components/Header';
import Footer from "components/Footer";
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from "../utils";
import {
  LIGHT_GRAY,
} from "layouts/constants";

const Container = styled.div `
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;
  align-items: center;

  p {
    img {
      display: block;
      margin: 0 auto;
    }
  }
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
        <Container className="simple">
          {writeMetaTags({ post, siteMetadata })}
          <SimpleHeader
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
          <Footer
            path={path}
            form={form}
            subscriberTags={getSubscriberTags({
              post,
              siteMetadata,
            })}
          />
        </Container>
      </React.Fragment>
    );
  }
}

  export default Simple;
