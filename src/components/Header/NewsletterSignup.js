import React from "react";
import styled from "styled-components";
import {
  DARK_BLUE,
  LIGHT_BLUE,
  HEADER_FONT,
} from 'layouts/constants';
import SubscribeForm, {
  TENSORFLOWJS,
} from "components/SubscribeForm";

const Container = styled.div `
  overflow: hidden;
  position: relative;
  transition-duration: 0.4s;
  background: white;
  box-shadow: 0 ${props => props.visible ? 6 : 0}px ${props => props.visible ? 9 : 0.0}px rgba(0,0,0,${props => props.visible ? 0.2 : 0});

  max-height: ${props => props.visible ? 560 : 0}px;
`;

const InnerContainer = styled.div `
  background: linear-gradient(180deg, rgba(255,255,255,1) 35%, ${LIGHT_BLUE} 100%);
`;

const Inner = styled.div `
  width: 700px;
  max-width: 100%;
  padding: 40px 20px 0 20px;
  margin: 0 auto;

  h1 {
    text-align: center;
    margin-top: 0;
  }
`;

const NewsletterSignup = ({
  visible,
}) => (
  <Container visible={visible}>
    <InnerContainer>
      <Inner>
        <h1>My newsletter</h1>
        <p>I send a newsletter about design, AI and other cool stuff in 2018.</p>
        <p>If you love AI, JavaScript, and all things web, you'll feel right at home. I'm journaling my progress learning artificial intelligence after ten years of experience building web and mobile apps for brands like Venmo and GE Healthcare.</p>
        <SubscribeForm
          form={TENSORFLOWJS}
        />
      </Inner>
    </InnerContainer>
  </Container>
);

export default NewsletterSignup;
