import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Animated from "components/Animated";
import ReadTime from "components/ReadTime";
import Footer from "components/Footer";
import writeHeadTags from 'utils/writeHeadTags';
import SubscribeForm, {
  TENSORFLOWJS,
} from "components/SubscribeForm";
import { pageView } from 'utils/mixpanel';

let timer;

const Container = styled.div `
  display: flex;
  max-width: 600px;
  margin: 0 auto;
  overflow-x: hidden;
  flex: 1;
  flex-direction: column;

  p {
    text-align: left;
  }

  h1 {
    text-align: center;
  }
`;

export default class Newsletter extends Component {
  componentDidMount() {
    pageView('/newsletter');
  }

  render() {
    const {
      data: {
        site: {
          siteMetadata,
        }
      },
    } = this.props;

    return (
      <Container key="container">
        {writeHeadTags(siteMetadata)}
        <h1>My newsletter</h1>
        <p>I send a newsletter about design, AI and other cool stuff in 2018.</p>
        <p>If you love AI, JavaScript, and all things web, you'll feel right at home. I'm journaling my progress learning artificial intelligence after ten years of experience building web and mobile apps for brands like Venmo and GE Healthcare.</p>
        <SubscribeForm
          form={TENSORFLOWJS}
        />
      </Container>
    );
  }
}
