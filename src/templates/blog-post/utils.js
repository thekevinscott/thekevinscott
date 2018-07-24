import Helmet from "react-helmet";
import React from "react";
import writeHeadTags from 'utils/writeHeadTags';
import { writeAllGraphTags } from "utils/writeGraphTags";
export const getImageUrl = (url, { image }) => {
  try {
    return `${url}${image.childImageSharp.sizes.src}`;
  } catch (err) {
    return null;
  }
};

export const getPostData = ({ frontmatter, timeToRead }, metadata) => {
  const title = frontmatter.title ? `${frontmatter.title}` : metadata.title;
  const description = frontmatter.description || frontmatter.excerpt || metadata.description;
  const path = `${metadata.url}${frontmatter.path}`;
  const imageURL = getImageUrl(metadata.url, frontmatter);
  const image_credit = frontmatter.image_credit;
  const tags = (frontmatter.tags || []).map(tag => tag.trim()).join(", ");
  const {
    author,
    keywords,
  } = metadata;

  return {
    title,
    description,
    path,
    imageURL,
    author,
    keywords: tags || keywords,
    timeToRead,
    url: path,
    credit: image_credit,
    ...frontmatter,
  };
};

export const writeMetaTags = ({ post, siteMetadata }) => {
  const {
    title,
    description,
    url,
    imageURL,
    social_image,
    social_image_width,
    social_image_height,
    author,
    keywords,
  } = getPostData(post, siteMetadata);

  return writeHeadTags({
    title,
    description,
    keywords,
    author,
    url,
    // TODO: Figure out how to get gifs working, this is a
    // hack to work around using gifs as the og:image
    image: imageURL || social_image,
    social_image_width,
    social_image_height,
    type: "article",
  });
};

export const getSubscriberTags = ({ post, siteMetadata }) => {
  const {
    title,
    description,
    path,
    image,
    author,
    keywords,
    form,
    tags,
    credit,
    timeToRead,
    date,
  } = getPostData(post, siteMetadata);

  return {
    article: path,
  };
};
