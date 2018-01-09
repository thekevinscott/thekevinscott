import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Animated from "../../components/Animated";

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;

const Title = styled.h1 `
  font-size: 38px;
  line-height: 1.04;
  letter-spacing: -.015em;
`;

const Template = ({
  data: {
    markdownRemark: post,
  },
}) => (
  <Animated>
    <Helmet title={`${post.frontmatter.title}`} />
    <Title>{post.frontmatter.title}</Title>
    <div
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
