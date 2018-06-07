import React, { Component } from "react";
// import rehypeReact from "rehype-react";
import Simple from "./simple";
import Grid from "./grid";
import { pageView } from 'utils/mixpanel';

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

export default class BlogPost extends Component {
  componentDidMount() {
    this.newPageLoad(this.props.location.pathname);
  }

  componentWillReceiveProps({ location }) {
    if (location.pathname !== this.props.location.pathname) {
      this.newPageLoad(location.pathname);
    }
  }

  newPageLoad(url) {
    pageView(url);
  }

  render() {
    const props = this.props;
    const layout = getLayout(props);
    const Layout = getLayoutComponent(layout);

    return (
      <Layout {...props} />
    );
  }
};
