import React, { Component } from "react";
import Simple from "./simple";
import Grid from "./grid";
import LeadMagnet from "./lead-magnet";
import render from 'components/markdown';
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
      htmlAst
      timeToRead
      excerpt(pruneLength: 250)
      frontmatter {
        description
        date
        path
        title
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
        image_credit
        image_height
        social_image
        social_image_width
        social_image_height
      }
    }
  }
`
;

const getLayoutComponent = layout => {
  if (layout === "grid") {
    return Grid;
  }
  if (layout === "lead-magnet") {
    return LeadMagnet;
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

    if (!props.data || !props.data.markdownRemark) {
      if (process.env.NODE_ENV !== "production") {
        console.warn("There was an error loading the blog post. You may want to check that the path has a starting and ending slash");
      }
      return (
        <div>Fatal error</div>
      );
    }

    return (
      <Layout {...props}>
        {render(props.data.markdownRemark.htmlAst)}
      </Layout>
    );
  }
};
