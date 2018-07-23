import React, { Component } from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import NewsletterSignup from './NewsletterSignup';
import {
  HEADER_HEIGHT,
  HEADER_BORDER,
  DARK_BLUE,
  LIGHT_BLUE,
  LIGHT_GRAY,
  YELLOW,
} from 'layouts/constants';
import {
  media,
} from 'layouts/constants';

const Container = styled.div `
  height: ${HEADER_HEIGHT}px;
  position: fixed !important;
  top: 0;
  background: rgba(255,255,255,0.96);
  width: 100%;
  border-top: ${HEADER_BORDER}px solid ${LIGHT_BLUE};
  transition-duration: 0.4s;
  ${props => props.shadow ? `
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  ` : null}
`;

const Center = styled.div `
  margin: 0 auto;
  height: 100%;
  align-items: center;
  padding: 0;
  display: flex;
  flex-direction: row;

  a {
    text-decoration: none;
    border-bottom: none;

    &:hover {
      border-bottom: 1px solid ${LIGHT_BLUE};
    }
  }
`;

const PADDING = 40;
const WIDTH = 120;
const Left = styled.div `
  padding: 0 ${PADDING}px;
  width: ${WIDTH}px;
  height: 100%;
  display: flex;
  align-items: center;

  a {
    // background: ${YELLOW};
    // padding: 10px;
  }
`;

const Right = styled.div `
  padding: 0 ${PADDING}px;
  width: ${WIDTH}px;
  height: 100%;
  display: flex;
  align-items: center;

  ${media.tablet`
    width: 0;
    padding: 0;
  `}
`;

const Flex = styled.div `
  flex: 1;
  background: green;
  content: ".";
  display: block;
`;

const PROMO_OFFSET = 95;
const Promo = styled.div `
  text-align: center;
  font-size: 1.4rem;
  transition-duration: 0.4s;
  max-width: 100%;
  width: 700px;
  position: relative;
  opacity: ${props => props.shadow ? `1` : `0`};
  overflow: hidden;
  height: ${props => props.visible ? 57 * 2 + 40: 57}px;
  align-items: center;
  justify-content: center;
  display: flex;

  margin-top: ${props => props.visible ? -1 * PROMO_OFFSET : 0}px;

  a {
    color: white;
    padding: 5px 10px;
    border-radius: 5px;

    &:hover {
      border: none;
    }
  }

  ${media.tablet`
    justify-content: flex-end;
    padding-right: 40px;
  `}

  ${media.phonePlus`
    span {
      display: none;
    }
  `}
`;

const SubscribeButton = styled.a `
  margin-left: 10px;
  background: ${LIGHT_BLUE};
`;

const width = 80;
const CloseNewsletter = styled.a `
  transition-duration: 0.4s;
  position: absolute;
  background; blue;
  display: block;
  margin: 0;
  left: 50%;
  width: ${width}px;
  margin: 0 0 0 -${width / 2}px;
  top: ${props => props.visible ? 110 : 45 }px;
  opacity: ${props => props.visible ? 0.4 : 0 };
  background: rgba(0,0,0,0.4);

  &:hover {
    opacity: ${props => props.visible ? 1 : 0 };
    background: ${LIGHT_BLUE};
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { newsletter: false };
  }

  handleSubscribe = (newsletter) => {
    this.setState({
      newsletter,
    });
  }

  render() {
    const {
      shadow,
    } = this.props;

    return (
      <Container shadow={shadow}>
        <Center>
          <Left>
            <Link to="/">Home</Link>
          </Left>
          <Flex />
          <Promo shadow={shadow} visible={this.state.newsletter}>
            <span>I send a newsletter for AI people</span>
          <SubscribeButton onClick={() => this.handleSubscribe(true)}>Subscribe <span>Now</span></SubscribeButton>
            <CloseNewsletter onClick={() => this.handleSubscribe(false)} visible={this.state.newsletter}>Close</CloseNewsletter>
          </Promo>
          <Flex />
          <Right />
        </Center>
        <NewsletterSignup visible={this.state.newsletter} />
      </Container>
    );
  }
}

export default Header;
