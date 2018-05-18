import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import styled from "styled-components";
import Img from "gatsby-image";
import Content from "./Content";
import Header from "./Header";
import Footer from "components/Footer";
import { writeMetaTags, getPostData } from "../utils";
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

const FOOTER_TAG = "Thanks for reading. If you like what you've read, stay in touch! You can subscribe below.";

class Simple extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object.isRequired,
    }).isRequired,
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

          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr />
          <p>{FOOTER_TAG}</p>
        </Content>
        <Tags tags={tags} />
        <Footer form={form} />
      </Container>
    );
  }
}

export default Simple;

// const Counter = () => (
//   <div>Suck a lemon</div>
// );

// const renderAst = new rehypeReact({
//   createElement: React.createElement,
//   components: {},
//   // components: { "interactive-counter": Counter },
// }).Compiler;
