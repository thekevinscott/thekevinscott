import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import {
  HEADER_HEIGHT,
  HEADER_BORDER,
  DARK_BLUE,
  LIGHT_BLUE,
} from '../layouts/constants';

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
  padding: 0 40px;
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

const Left = styled.div `
  flex: 0;
`;

const Right = styled.div `
  flex: 1;
  text-align: right;
`;

const Header = ({ shadow }) => (
  <Container shadow={shadow}>
    <Center>
      <Left>
        <Link to="/">Home</Link>
      </Left>
      { /*
      <Right>
        About |
        Subscribe
      </Right>
      */ }
    </Center>
  </Container>
);

export default Header;
