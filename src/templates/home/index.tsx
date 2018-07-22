import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Animated from 'components/Animated';
import Footer from 'components/Footer';
import Post from './Post';
import {
  getPosts,
} from './selectors';
import writeHeadTags from 'utils/writeHeadTags';
import { pageView } from 'utils/mixpanel';

import {
  media,
  SERIF,
  SANS_SERIF,
  media,
} from 'layouts/constants';

const Container = styled.div `
  max-width: 780px;
  padding: 0 40px;
  margin: 0 auto;
  overflow: hidden;

  ${media.tablet`
    width: auto;
    padding: 0 20px;
  `}

  a {
    border-bottom: none;
  }
`;

const BlogPosts = styled.div `
  padding-top: 40px;
  max-width: 600px;

  ${media.tablet`
    width: auto;
    padding: 0;
  `}
`;

const Header = styled.div `
  margin-top: 40px;
  font-weight: bold;
`;

const Title = styled.h1 `
  max-width: 700px;
  margin: 0 0 80px 0;
  line-height: 4.6rem;
`;

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
    } catch(err) { }

    if (!posts.length) {
      setTimeout(() => {
        this.forceUpdate();
      });
    }
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

    return [
      <Container key="container">
        {writeHeadTags(siteMetadata)}
        <Header>
          <Title>
            {siteMetadata.title}
          </Title>
        </Header>
        <BlogPosts>
          {getPosts(posts).map((post, index) => (
            <Post
              key={post.id}
              post={post}
              index={index}
            />
          ))}
        </BlogPosts>
      </Container>,
      <Footer key="footer" />
    ];
  }
}
