import Helmet from "react-helmet";
import React from "react";
import writeHeadTags from 'utils/writeHeadTags';
import { writeAllGraphTags } from "utils/writeGraphTags";
export const getImage = (url, frontmatter) => {
  try {
    return `${metadata.url}${frontmatter.image.childImageSharp.sizes.src}`;
  } catch (err) {
    return null;
  }
};

export const getPostData = ({ frontmatter, url, timeToRead }, metadata) => {
  const title = frontmatter.title ? `${frontmatter.title}` : metadata.title;
  const description = frontmatter.description || frontmatter.excerpt || metadata.description;
  const path = `${metadata.url}${frontmatter.path}`;
  const image = getImage(url, frontmatter);
  const image_credit = frontmatter.image_credit;
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
    timeToRead,
    credit: image_credit,
    ...frontmatter,
  };
};

export const writeMetaTags = ({ post, siteMetadata }) => {
  const {
    title,
    description,
    path: url,
    image,
    author,
    keywords,
  } = getPostData(post, siteMetadata);

  return writeHeadTags({
    title,
    description,
    keywords,
    author,
    url,
    image,
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
