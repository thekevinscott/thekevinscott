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
  social_image_width,
  social_image_height,
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
      image,
      url,
      type,
      'image:width': social_image_width,
      'image:height': social_image_height,
    })}
  </Helmet>
);

export default writeHeadTags;
