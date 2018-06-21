import React, { Component } from "react";
import Newsletter from "../../templates/newsletter";
export default Newsletter;
export const pageQuery = graphql`
  query NewsletterQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        author
        url
      }
    }
  }
`;

