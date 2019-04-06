import Newsletter from 'templates/newsletter';
import { graphql } from 'gatsby';
// export { default as default } from 'templates/newsletter';
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

export default Newsletter;
