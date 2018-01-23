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
import {
  PINK,
  GREEN,
  SERIF,
  SANS_SERIF,
} from "../../layouts/constants";

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

const Header = styled.div `
  h1 {
    transition-duration: 0.5s;
    font-size: 32px;
    line-height: 1.24;
    letter-spacing: -.015em;
    margin: 40px 0 40px 0;
    width: 700px;
  }

  span {
    float: right;
    margin-top: -20px;
  }
`;

const Content = styled.div `
  max-width: 100%;
  width: 700px;
  margin-bottom: 100px;

  span {
    &.figcaption, &.figcaption_hack {
      text-align: center;
      font-size: 14px;
      font-family: ${SANS_SERIF};
      display: block;
      margin-top: -30px;
      margin-bottom: 40px;
      opacity: 0.9;
    }
  }

  .dropcap {
    font-family: ${SANS_SERIF};
    float: left;
    --x-height-multiplier: 0.342;
    --baseline-multiplier: 0.22;
    font-weight: 600;
    font-size: 72px;
    padding-top: 6px;
    margin-left: -5px;
    margin-right: 7px;
    letter-spacing: -.03em;
    line-height: .83;
    margin-bottom: -.08em;
  }

  .gatsby-image-outer-wrapper {
    width: 100%;
    background: blue;
    height: 200px;
  }

  h1 {
    margin-top: 60px;
  }

  blockquote {
    a {
      color: inherit;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }

  a {
    transition-duration: 0.15s;
    border-bottom: 1px solid transparent;
    color: ${GREEN};

    &:hover {
      border-bottom: 1px solid ${GREEN};
    }

    &.gatsby-resp-image-link {
      border: none;

      &:hover {
        border: none;
      }
    }
  }
`;

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
      <iframe style="height:400px;width:100%;max-width:800px;margin:30px auto;" src="https://upscri.be/8c3b09/?as_embed"></iframe>
    </Animated>
  );
};

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export default Template;
