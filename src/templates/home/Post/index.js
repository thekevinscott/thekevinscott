import React, { Component } from "react";
import {
  format,
} from "../../../utils/getDate";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
// import Animated from "../../../components/Animated";
// import ReadTime from "../../../components/ReadTime";
// import Info from "./Info";
// import PostContent from "./PostContent";
// import StyledPost from "./StyledPost";
// import Title from "./Title";
// import ReadMore from "./ReadMore";

const Ul = styled.ul `
`;

const Li = styled.li `
  margin: 0 0 20px 0;

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
