import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";

const Container = styled.div `
  position: fixed;
  top: 0;
  background: rgba(255,255,255,0.96);
  z-index: 1;
  width: 100%;
  padding: 20px 0;
  transition-duration: 0.4s;
  ${props => props.shadow ? `
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  ` : null}
`;

const Center = styled.div `
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: row;
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
      <Right>
        About |
        Subscribe
      </Right>
    </Center>
  </Container>
);

export default Header;
