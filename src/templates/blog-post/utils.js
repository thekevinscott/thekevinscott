import Helmet from "react-helmet";
import React from "react";
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
    author,
    keywords,
  } = getPostData(post, siteMetadata);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords}/>
      <meta name="author" content={author}/>
      <link rel="canonical" href={url} />
      {writeAllGraphTags({
        title,
        description,
        image: imageURL,
        url,
        type: "article",
      })}
    </Helmet>
  );
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
