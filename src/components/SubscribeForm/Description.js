import React from "react";
import styled from "styled-components";
// import Kevin from "./kevinscott-professional.jpg";
import Kevin from "./kevinscott-lightning.jpg";
import {
  media,
} from 'layouts/constants';

const SIZE = 70;
const Container = styled.div `
  display: flex;
  margin-bottom: 40px;
  align-items: flex-start;

  ${media.tablet`
    flex-direction: column;
    margin: 20px;
  `}
`;

const Img = styled.img `
  min-width: ${SIZE}px;
  min-height: ${SIZE}px;
  width: ${SIZE}px;
  height: ${SIZE}px;
  border-radius: ${SIZE}px;
  margin-right: 20px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

const Content = styled.div `
  display: flex;
  flex-direction: column;

  p {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Description = ({
  showImage,
  description,
}) => (
  <Container>
    {showImage && (
      <Img src={Kevin} alt="Kevin Scott" />
    )}
    <Content>
      {[].concat(description).map((d, key) => (
        <p key={key}>{d}</p>
      ))}
    </Content>
  </Container>
);

Description.defaultProps = {
  showImage: true,
};

export default Description;
