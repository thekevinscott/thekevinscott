import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Animated from "../../components/Animated";
import ReadTime from "../../components/ReadTime";
import Post from "./Post";
import Title from "./Title";
import Header from "./Header";
import Container from "./Container";
import BlogPosts from "./BlogPosts";
import {
  getPosts,
} from "./selectors";

let timer;

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
    const posts = this.getPosts();
    if (window && !timer) {
      timer = setTimeout(() => {
        window.index = true;
      }, 700 * posts.length);
    }
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
    const posts = this.getPosts();
    return (
      <Container>
        <Header>
          <Title>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
              }}
            >
              Kevin Scott
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
      </Container>
    );
  }
}
