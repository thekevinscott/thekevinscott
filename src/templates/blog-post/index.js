import React, { Component } from "react";
// import {
//   compareAsc,
//   format,
// } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Animated from "../../components/Animated";
import ReadTime from "../../components/ReadTime";
import Img from "gatsby-image";
import Back from "./Back";
import CoverImg from "./CoverImg";
import Content from "./Content";
import Header from "./Header";

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date
        path
        title
        image {
          childImageSharp {
            sizes(maxWidth: 2400) {
              src
              srcSet
              sizes
            }
          }
        }
      }
    }
  }
`
;

const Template = (opts) => {
  const {
    data: {
      markdownRemark: post,
    },
  } = opts;
  return (
    <Animated>
      <Helmet title={`${post.frontmatter.title}`} />
      <Header>
        <Back />
        <ReadTime time={post.timeToRead} />
        <h1>{post.frontmatter.title}</h1>
      </Header>
      { post.frontmatter.image && (
        <CoverImg
          src={post.frontmatter.image.childImageSharp.sizes.src}
        />
      )}
      <Content
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <iframe src="https://upscri.be/8c3b09/?as_embed" />
    </Animated>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export default Template;
