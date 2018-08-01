import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Animated from 'components/Animated';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Post from './Post';
import {
  getPosts,
} from './selectors';
import writeHeadTags from 'utils/writeHeadTags';
import { pageView } from 'utils/mixpanel';
import * as styles from './styles.module.scss';
import checkForDuplicatePaths from 'utils/checkForDuplicatePaths';

export default class Index extends Component {
  static propTypes = {
    data: PropTypes.shape({
      allMarkDownRemark: PropTypes.shape({
        edges: PropTypes.any,
      }),
    }).isRequired,
  }

  static defaultProps = {
    data: {
      allMarkDownRemark: {
        edges: [],
      },
    },
  }

  componentDidMount() {
    pageView('/');
    const posts = this.getPosts();
  }

  getPosts = () => {
    let posts = [];
    try {
      const {
        data: {
          allMarkdownRemark: {
            edges,
          },
        },
      } = this.props;
      posts = edges;
    } catch(err) {
      if (process.env.NODE_ENV !== 'production') {
        console.error(err);
      }
    }

    if (!posts.length) {
      setTimeout(() => {
        this.forceUpdate();
      });
    }

    checkForDuplicatePaths(posts);

    return posts;
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata,
        }
      },
    } = this.props;

    const posts = this.getPosts();

    return (
      <React.Fragment>
        <Header visible={this.props.visible} />
        <div className={styles.container}>
          {writeHeadTags(siteMetadata)}
          <div className={styles.home}>
            <h1 className={styles.title}>
              <span>
                {siteMetadata.title}
              </span>
            </h1>
          </div>
          <div className={styles.blogPosts}>
            {getPosts(posts).map((post, index) => (
              <Post
                key={post.id}
                post={post}
                index={index}
              />
            ))}
          </div>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}
