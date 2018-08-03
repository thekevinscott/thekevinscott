import React, { Component } from "react";
import Home from "../templates/home";
export default Home;
export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
        url
        image
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
