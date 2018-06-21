import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Animated from "components/Animated";
import ReadTime from "components/ReadTime";
import Footer from "components/Footer";
import writeHeadTags from 'utils/writeHeadTags';
import { pageView } from 'utils/mixpanel';

let timer;

const Title = styled.h1 `
  font-weight: normal;
  max-width: 700px;
  font-size: 4rem;
  color: rgba(0,0,0,0.7);
  margin: 0;

  a {
    line-height: 4.6rem;
  }
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

    return (
      <Container key="container">
        {writeHeadTags(siteMetadata)}
        YARR
      </Container>
    );
  }
}
