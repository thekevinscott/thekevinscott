import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Animated from "../../components/Animated";
import ReadTime from "../../components/ReadTime";
import Img from "gatsby-image";

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
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
    font-size: 38px;
    line-height: 1.04;
    letter-spacing: -.015em;
    max-width: 700px;
  }

  span {
    float: right;
    margin-top: -20px;
  }
`;

const Content = styled.div `
  max-width: 100%;
  width: 700px;

  .gatsby-image-outer-wrapper {
    width: 100%;
    background: blue;
    height: 200px;
  }

  h1 {
    margin-top: 60px;
  }
`;

const CoverImg = styled.img `
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  transition-duration: 0.5s;
  @media (max-width: 1600px) {
    max-height: 500px;
  }
  @media (max-width: 1200px) {
    max-height: 420px;
  }
  @media (max-width: 1000px) {
    max-height: 360px;
  }
  @media (max-width: 860px) {
    max-height: 280px;
  }
  @media (max-width: 760px) {
    max-height: 200px;
  }
`;

const Template = ({
  data: {
    markdownRemark: post,
  },
}) => (
  <Animated>
    <Helmet title={`${post.frontmatter.title}`} />
    <Header>
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
  </Animated>
);

Template.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object.isRequired,
  }).isRequired,
};

export default Template;
