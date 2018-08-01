import React, { Component } from 'react';
import styled from 'styled-components';
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
import checkForDuplicatePaths from 'utils/checkForDuplicatePaths';

import {
  media,
  SERIF,
  SANS_SERIF,
  media,
  YELLOW,
  HEADER_HEIGHT,
  HEADER_BORDER,
} from 'layouts/constants';

const Container = styled.div `
  // max-width: 780px;
  padding: 0 40px;
  // margin: 0 auto;
  margin: ${HEADER_HEIGHT + HEADER_BORDER}px auto 0 auto;
  overflow: hidden;

  ${media.tablet`
    width: auto;
    padding: 0 20px;
  `}

  a {
    border-bottom: none;
  }
`;

const BlogPosts = styled.ul `
  list-style-type: none;
  padding: 40px 0 0 0;
  margin: 0 auto;
  // max-width: 780px;
  max-width: 600px;

  ${media.tablet`
    width: auto;
    padding: 0;
  `}
`;

const HomeHeader = styled.div `
  margin-top: 40px;
  font-weight: bold;
  padding: 0 180px;

  ${media.giant`
    padding: 0 80px;
  `}

  ${media.desktop`
    padding: 0 60px;
  `}

  ${media.tablet`
    padding: 0;
    margin-left: -5px;
  `}
`;

const SHADOW = 10;
const PADDING = 40;
const ROTATE = 0.0;
const Title = styled.h1 `
  // max-width: 700px;
  margin: 0 0 80px -${PADDING}px;
  line-height: 4.6rem;
  font-size: 8.2rem;
  line-height: 8.2rem;
  background: ${YELLOW};
  padding: ${PADDING}px;
  box-shadow: ${SHADOW}px ${SHADOW}px 0 #100382bd;
  transform: rotate(-${ROTATE}deg);

  span {
    display: block;
    transform: rotate(${ROTATE}deg);
  }

  ${media.giant`
    font-size: 5.6rem;
    line-height: 5.6rem;
  `}

  ${media.tablet`
    margin-left: 0;
    width: 100%;
    font-size: 4.8rem;
    line-height: 4.8rem;
  `}

  ${media.phonePlus`
    // margin-left: -10px;
    width: calc(100% - 10px);
    padding: 20px 40px;
    font-size: 4.6rem;
  `}
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
        <Container>
          {writeHeadTags(siteMetadata)}
          <HomeHeader>
            <Title>
              <span>
                {siteMetadata.title}
              </span>
            </Title>
          </HomeHeader>
          <BlogPosts>
            {getPosts(posts).map((post, index) => (
              <Post
                key={post.id}
                post={post}
                index={index}
              />
            ))}
          </BlogPosts>
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}
