import React, { Component } from "react";
import {
  media,
} from "layouts/constants";
import {
  format,
} from "utils/getDate";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";

const Ul = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li `
  list-style-type: none;
  padding: 0;
  margin: 0 0 20px 0;

  ${media.tablet`
    margin-bottom: 40px;
  `}

  a {
    text-decoration: underline;
  }
`;

const Post = ({
  post,
  index,
}) => {
  const {
    excerpt,
    timeToRead,
    frontmatter: {
      title,
      image,
      date,
    },
  } = post;

  return (
    <Ul>
      <Li>
        <Link to={post.frontmatter.path}>{title}</Link>
      </Li>
    </Ul>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    excerpt: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Post;
