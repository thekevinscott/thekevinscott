import React, { Component } from 'react';
import {
  media,
  BLUE,
} from 'layouts/constants';
import {
  format,
} from 'utils/getDate';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';

const Li = styled.li `
  list-style-type: none;
  margin: 0 0 20px 0;
  padding: 0;
`;

const SHADOW = 10;
const Content = styled.div `

  padding: 20px;
  margin: 0px 0 ${60 + SHADOW}px -20px;
  width: calc(100% + 40px);
  box-shadow: 0px 0px 0 #100382bd;
  transition-duration: 0.4s;

  &:after {
    clear: both;
    content: "";
    display: block;
  }

  a {
    display: inline-block;
    float: right;
    font-size: 1.2rem;
    color: rgba(0,0,0,0.7);
    border-bottom: 2px solid transparent;
    text-transform: uppercase;
    padding: 10px;
    text-align: right;
    transition-duration: 0.4s;
    height: 20px;
    margin-bottom: 10px;
  }

  &:hover {
    background: #10038208;
    box-shadow: ${SHADOW}px ${SHADOW}px 0 #100382bd;

    a {
      height: 30px;
      margin-bottom: 0px;
      border-bottom: 2px solid ${BLUE};
    }
  }

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
    <Li>
      <Link to={post.frontmatter.path}>
        <Content>
          <Title>
            {title}
          </Title>
          <Excerpt>{excerpt}</Excerpt>
          <a>Read more &rarr;</a>
        </Content>
      </Link>
    </Li>
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
