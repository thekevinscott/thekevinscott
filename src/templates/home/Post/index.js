import React, { Component } from "react";
import {
  format,
} from "../../../utils/getDate";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Animated from "../../../components/Animated";
import ReadTime from "../../../components/ReadTime";
import Info from "./Info";
import PostContent from "./PostContent";
import StyledPost from "./StyledPost";
import Title from "./Title";
import ReadMore from "./ReadMore";

export default class Post extends Component {
  static propTypes = {
    post: PropTypes.shape({
      id: PropTypes.string.isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
    index: PropTypes.number.isRequired,
  };

  getAnimate = (index) => {
    try {
      return window && window.index !== true && index !== 0 ? true : false;
    } catch(err) { }

    return index !== 0 ? true : false;
  }

  render() {
    const {
      post,
      index,
    } = this.props;
    const {
      excerpt,
      timeToRead,
      frontmatter: {
        title,
        image,
        date,
      },
    } = post;

    const animate = this.getAnimate(index);

    return (
      <Animated index={index} animate={false}>
        <Link to={post.frontmatter.path}>
          <StyledPost>
            <Info>
              { date && (<div><time>{format(date)}</time></div>)}
              <ReadTime time={timeToRead} />
            </Info>
            <PostContent>
              <Title>
                <h2>{title}</h2>
              </Title>
              <p>{excerpt}</p>
            </PostContent>
          </StyledPost>
        </Link>
      </Animated>
    );
  }
}
