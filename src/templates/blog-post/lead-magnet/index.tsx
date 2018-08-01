import React, { Component } from 'react';
import WebFont from 'webfontloader';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Content from './Content';
import Header from 'components/Header';
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from '../utils';
import {
  LIGHT_GRAY,
  YELLOW,
  HEADER_BORDER,
  HEADER_HEIGHT,
} from 'layouts/constants';

const headHeight = HEADER_BORDER + HEADER_HEIGHT + 0;

const Container = styled.div `
  display: flex;
  max-width: 100%;
  margin-top: ${headHeight}px;
  height: calc(100% - ${headHeight}px);
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;
  align-items: center;

  p {
    img {
      display: block;
      margin: 0 auto;
    }
  }
`;

const OverContainer = styled.div `
  height: 100%;
  flex: 1;
`;

class LeadMagnet extends Component {
  static propTypes = {
    data: PropTypes.shape({
      markdownRemark: PropTypes.shape({
        html: PropTypes.any.isRequired,
        htmlAst: PropTypes.any.isRequired,
      }).isRequired,
      site: PropTypes.shape({
        siteMetadata: PropTypes.shape({
          title: PropTypes.string.isRequired,
          subtitle: PropTypes.string.isRequired,
          author: PropTypes.string,
          description: PropTypes.string,
          keywords: PropTypes.string,
          url: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
    children: PropTypes.any,
  };

  render() {
    const {
      children,
      data: {
        markdownRemark: post,
        site: {
          siteMetadata,
        },
      },
    } = this.props;

    const {
      title,
      subtitle,
    } = getPostData(post, siteMetadata);

    return (
      <OverContainer>
        <Header visible={true} />
        <Container className="leadmagnet">
          {writeMetaTags({ post, siteMetadata })}
          <Content
            className="blog-post-content"
          >
            {children}
          </Content>
        </Container>
      </OverContainer>
    );
  }
}

export default LeadMagnet;
