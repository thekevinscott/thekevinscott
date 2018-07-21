import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import styled from "styled-components";
import Content from "./Content";
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
  height: 100%;
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;
  align-items: center;

  header {
    flex: 0;
  }

  p {
    img {
      display: block;
      margin: 0 auto;
    }
  }
`;

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
    } = getPostData(post, siteMetadata);

    return (
      <Container className="leadmagnet">
        {writeMetaTags({ post, siteMetadata })}
        <header><h1>{title}</h1></header>
        <Content
          className="blog-post-content"
        >
          {children}
        </Content>
      </Container>
    );
  }
}

export default LeadMagnet;
