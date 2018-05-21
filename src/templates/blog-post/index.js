import React, { Component } from "react";
import rehypeReact from "rehype-react";
import Simple from "./simple";
import Grid from "./grid";
import Img, { KEY as ImgKey } from "components/Img";
import Gist, { KEY as GistKey } from "components/Embed";

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
      htmlAst
      timeToRead
      excerpt(pruneLength: 250)
      frontmatter {
        description
        date
        path
        title
        image_credit
        form
        tags
        layout
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

const getLayoutComponent = layout => {
  if (layout === "grid") {
    return Grid;
  }

  return Simple;
};

const getLayout = props => {
  try {
    return props.data.markdownRemark.frontmatter.layout;
  } catch (err) {
    return null;
  }
};

export default (props) => {
  const layout = getLayout(props);
  const Layout = getLayoutComponent(layout);

  return (
    <Layout {...props}>
      {renderAst(props.data.markdownRemark.htmlAst)}
    </Layout>
  );
};

const components = {
  [ImgKey]: Img,
  [GistKey]: Gist,
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components,
}).Compiler;
