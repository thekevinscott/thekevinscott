import React, { Component } from 'react'
import { graphql } from 'gatsby';
import Link, { navigateTo } from 'gatsby-link';
import { isEqual } from 'date-fns';
import Gorilla from './assets/gorilla.jpg';
import * as styles from './styles.module.scss';

const isValidDate = path => {
  if (path.length < 4 || path.length > 6) {
    return false;
  }

  const today = new Date();

  const month = parseInt(path.slice(0,2), 10);
  const day = parseInt(path.slice(2,4), 10);
  const year = path.length > 4 ? parseInt(`20${path.slice(4)}`, 10) : today.getFullYear();
  return new Date(year, month - 1, day);
};

const getPathDate = (path: string) => isNaN(parseInt(path, 10)) && isValidDate(path);

const findMatchingPost = (path, {
  allMarkdownRemark: {
    edges,
  },
}) => {
  if (!path || path === '/') {
    return '/';
  }

  const pathDate = getPathDate(path);
  try {
    if (isNaN(pathDate.getTime())) {
      return null;
    }
  } catch(err) {
    return null;
  }

  return edges.map(({
    node: {
      frontmatter: {
        date,
        path: edgePath,
      },
    },
  }) => ({
    date: new Date(date),
    path,
  })).reduce((url, { date }) => {
    if (url) {
      return url;
    }

    const dateToCheck = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    return isEqual(dateToCheck, pathDate) ? path : null;
  }, null);
};

class NotFoundPage extends Component {
  componentDidMount() {
    const pathname = window.location.pathname.split('/').filter(f => f).join('');

    const matchingPost = findMatchingPost(pathname, this.props.data);

    if (matchingPost) {
      return navigateTo(matchingPost);
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <h1>Page not found!</h1>
        <img src={Gorilla} alt="Sad Gorilla" />
        <Link to="/">Go back home</Link>
      </div>
    );
  }
}

export const pageQuery = graphql`
  query NotFoundQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          timeToRead
          frontmatter {
            title
            date
            path
          }
        }
      }
    }
  }
`;

export default NotFoundPage;
