import React from "react";
import Helmet from "react-helmet";
import { writeAllGraphTags } from "./writeGraphTags";

const writeHeadTags = ({
  title,
  description,
  keywords,
  author,
  url,
  image,
  type = "website",
}) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords}/>
    <meta name="author" content={author}/>
    <link rel="canonical" href={url}/>
    {writeAllGraphTags({
      title,
      description,
      type: "website",
    })}
    {writeAllGraphTags({
      title,
      description,
      image,
      url: path,
      type: "article",
    })}
  </Helmet>
);

export default writeHeadTags;
