import React, { Component } from "react";
import _Home from "../templates/Home";
export default _Home;
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
        url
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;
