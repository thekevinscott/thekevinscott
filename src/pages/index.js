// import React, { Component } from "react";
import Home from 'templates/home';
import { graphql } from 'gatsby';

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
