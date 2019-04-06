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

const getTitle = (title: string, date: Date) => {
  if (isPublished(date)) {
    return `${title}`;
  }

  return `[DRAFT] ${title}`;
};

export const isPublished = (date: Date) => date && isAfter(date, new Date());

interface IProps {
  post: {
    id: string;
    excerpt: string;
  };
  index: number;
}

const Post: React.SFC<IProps> = ({
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
};

export default Post;
