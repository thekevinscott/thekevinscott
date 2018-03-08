import React, { Component } from "react";
import WebFont from 'webfontloader';
// import {
//   compareAsc,
//   format,
// } from "date-fns";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Animated from "../../components/Animated";
import Img from "gatsby-image";
import CoverImg from "./CoverImg";
import Content from "./Content";
import Title from "./Title";
import Header from "./Header";
import Caption from "./CoverImg/Caption";
import Signup from "./Signup";

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      timeToRead
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
      },
    } = this.props;

    return (
      <Animated>
        <Helmet
          title={`${post.frontmatter.title}` || "Kevin Scott"}
          description="Design & AI"
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
          />
        </Header>
        <Content
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Signup />
      </Animated>
    );
  }
}

export default Template;
