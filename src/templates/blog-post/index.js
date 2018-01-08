import React from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

const Post = styled.div `
  h1 {
    font-weight: 600;
    font-size: 38px;
    // margin-left: -2.63px;
    line-height: 1.04;
    letter-spacing: -.015em;
  }
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query we'll write in a bit
}) {
  const { markdownRemark: post } = data; // data.markdownRemark holds our post data
  return (
    <Post>
      <Helmet title={`${post.frontmatter.title}`} />
      <h1>{post.frontmatter.title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </Post>
  );
}

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
