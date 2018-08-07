import React, { Component } from 'react';
import {
  media,
  BLUE,
} from 'layouts/constants';
import {
  isAfter,
  format,
} from 'utils/getDate';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import * as styles from './styles.module.scss';

const getTitle = (title, date) => {
  if (isPublished(date)) {
    return `${title}`;
  }

  return `[DRAFT] ${title}`;
};

export const isPublished = date => date && isAfter(date, new Date());

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
    <div className={styles.post}>
      <Link to={post.frontmatter.path}>
        <span className={styles.postContent}>
          <h2>{getTitle(title, date)}</h2>
          <p>{excerpt}</p>
          <span className={styles.readMore}>Read more &rarr;</span>
        </span>
      </Link>
    </div>
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
