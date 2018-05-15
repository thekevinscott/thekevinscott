export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        title
        author
        description
        keywords
        url
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
      excerpt(pruneLength: 250)
      frontmatter {
        description
        date
        path
        title
        image_credit
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

export default from "./Template";
