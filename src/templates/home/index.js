import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Animated from "../../components/Animated";
import ReadTime from "../../components/ReadTime";
import Footer from "../../components/Footer";
import Post from "./Post";
import Header from "./Header";
import Container from "./Container";
import BlogPosts from "./BlogPosts";
import Helmet from "react-helmet";
import {
  getPosts,
} from "./selectors";
import { writeAllGraphTags } from "../../utils/writeGraphTags";
import { pageView } from 'utils/mixpanel';

let timer;

const Title = styled.h1 `
  font-weight: normal;
  max-width: 700px;
  font-size: 4rem;
  color: rgba(0,0,0,0.7);
  margin: 0;
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
          siteMetadata: {
            title,
            description,
            keywords,
            author,
            url,
          },
        }
      },
    } = this.props;

    const posts = this.getPosts();

    return [
      <Container key="container">
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="keywords" content={keywords}/>
          <meta name="author" content={author}/>
          <link rel="canonical" href={url}/>
          {writeAllGraphTags({
            title,
            description,
            type: "website",
          })}
        </Helmet>
        <Header>
          <Title>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              {title}
            </Link>
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
