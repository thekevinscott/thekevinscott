import React, { Component } from "react";
import WebFont from 'webfontloader';
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Img from "gatsby-image";
import CoverImg from "./CoverImg";
import Content from "./Content";
import Title from "./Title";
import Header from "./Header";
import Caption from "./CoverImg/Caption";
import Footer from "../../components/Footer";
import { writeAllGraphTags } from "../../utils/writeGraphTags";
import {
  LIGHT_GRAY,
} from "../../layouts/constants";

const Container = styled.div `
  display: flex;
  max-width: 100%;
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const getImage = (url, frontmatter) => {
  try {
    return `${metadata.url}${frontmatter.image.childImageSharp.sizes.src}`;
  } catch (err) {
    return null;
  }
};

const getBits = ({ frontmatter, url }, metadata) => {
  const title = frontmatter.title ? `${frontmatter.title}` : metadata.title;
  const description = frontmatter.description || frontmatter.excerpt || metadata.description;
  const path = `${metadata.url}${frontmatter.path}`;
  const image = getImage(url, frontmatter);
  const {
    author,
    keywords,
  } = metadata;

  return {
    title,
    description,
    path,
    image,
    author,
    keywords,
    ...frontmatter,
  };
};

const FOOTER_TAG = "Thanks for reading. If you like what you've read, stay in touch! You can subscribe below.";

const TagContainer = styled.div `
  margin: 0;
  padding: 0;
  max-width: 100%;
  font-size: 1.6rem;
  color: rgba(0,0,0,0.4);
  width: 780px;

  li {
    display: inline;
    padding: 0;
  }
`;

const Tags = ({ tags }) => <TagContainer>Tags: {tags.join(", ")}</TagContainer>;

class Template extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.object.isRequired,
    }).isRequired,
  };

  render() {
    const {
      data: {
        markdownRemark: post,
        site: {
          siteMetadata,
        },
      },
    } = this.props;

    const {
      title,
      description,
      path,
      image,
      author,
      keywords,
      form,
      tags,
    } = getBits(post, siteMetadata);

    const __html = [
      post.html,
      "<hr />",
      `<p>${FOOTER_TAG}</p>`,
    ].join("");

    return (
      <Container>
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords}/>
          <meta name="author" content={author}/>
          <link rel="canonical" href={path} />
          {writeAllGraphTags({
            title,
            description,
            image,
            url: path,
            type: "article",
          })}
        </Helmet>
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
          dangerouslySetInnerHTML={{ __html }}
        />
        <Tags tags={tags} />
        <Footer form={form} />
      </Container>
    );
  }
}

export default Template;
