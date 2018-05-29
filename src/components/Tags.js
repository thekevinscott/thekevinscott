import React from "react";
import styled from "styled-components";

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

const getTags = (tags = []) => [
  tags.slice(0, -1).join(", "),
  tags.slice(-1),
].filter(t => t).join(", and ");

window.getTags = getTags;

const Tags = ({ tags }) => <TagContainer>Tagged as {getTags(tags)}</TagContainer>;

export default Tags;
