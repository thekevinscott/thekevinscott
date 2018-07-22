import React, { Component } from 'react';
import {
  media,
} from 'layouts/constants';
import {
  format,
} from 'utils/getDate';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Ul = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Li = styled.li `
  list-style-type: none;
  padding: 0;
  margin: 0 0 60px 0;

  ${media.tablet`
    margin-bottom: 40px;
  `}
`;

const Title = styled.h2 `
  font-weight: 500;
  font-size: 2.8rem;
  margin: 0 0 5px 0;
  color: rgba(0,0,0,0.65);
  width: 100%;
  display: block;
  border-bottom: 1px solid rgba(0,0,0,0);
  &:hover {
    border-bottom: 1px solid rgba(0,0,0,0.4);
  }
`;

const Excerpt = styled.p `
  color: rgba(0,0,0,0.5);
  font-size: 1.4rem;
  margin: 0;
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
      <Link to={post.frontmatter.path}>
        <Li>
          <Title>
            {title}
          </Title>
          <Excerpt>{excerpt}</Excerpt>
        </Li>
      </Link>
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
