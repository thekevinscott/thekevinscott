import React from "react";

export const writeGraphTags = (type, tags = {}) => Object.keys(tags).filter(key => {
  return tags[key];
}).map(key => (
  <meta
    key={key}
    property={`${type}:${key}`}
    content={tags[key]}
  />
));

export const writeAllGraphTags = tags => ["og", "twitter"].map(key => writeGraphTags(key, tags));
