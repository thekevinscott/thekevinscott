import React, { Component } from "react";
import WebFont from 'webfontloader';
// import {
//   compareAsc,
//   format,
// } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
// import Animated from "../../components/Animated";
import Img from "gatsby-image";
import CoverImg from "./CoverImg";
import Content from "./Content";
import Title from "./Title";
import Header from "./Header";
import Caption from "./CoverImg/Caption";
import Signup from "./Signup";
import { writeAllGraphTags } from "../../utils/writeGraphTags";

const Container = styled.div `
  display: flex;
  max-width: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

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

class Template extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object.isRequired,
    }).isRequired,
  };

  componentDidMount() {
    WebFont.load({
      typekit: {
        id: "zip7tcb",
      }
    });
  }

  render() {
    const {
      data: {
        markdownRemark: post,
        site: {
          siteMetadata,
        },
      },
    } = this.props;

    const title = post.frontmatter.title ? `${post.frontmatter.title}` : siteMetadata.title;
    const description = post.frontmatter.description || post.frontmatter.excerpt || siteMetadata.description;
    const url = `${siteMetadata.url}${post.frontmatter.path}`;
    const image = `${siteMetadata.url}${post.frontmatter.image.childImageSharp.sizes.src}`;
    const {
      author,
      keywords,
    } = siteMetadata;

    return (
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords}/>
          <meta name="author" content={author}/>
          <link rel="canonical" href={url} />
          {writeAllGraphTags({
            title,
            description,
            image,
            url,
          })}
        </Helmet>
        <Helmet
        />
        <Header>
          { post.frontmatter.image && (
            <CoverImg
              src={post.frontmatter.image.childImageSharp.sizes.src}
            />
          )}
          {post.frontmatter.image_credit && (
            <Caption
              caption={post.frontmatter.image_credit}
            />
          )}
          <Title
            title={post.frontmatter.title}
            time={post.timeToRead}
            date={post.frontmatter.date}
          />
        </Header>
        <Content
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Signup />
      </Container>
    );
  }
}

export default Template;
