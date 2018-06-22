import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div `
  position: relative;
  max-height: 600px;
  overflow: hidden;
`;

const Img = styled.img `
  width: 100%;
  object-fit: cover;
  display: block;
  transition-duration: 0.5s;
  margin: 0;
`;

const Caption = styled.span `
  position: absolute;
  display: block;
  font-size: 1.2rem;
  z-index: 2;
  background: rgba(255,255,255,0.8);
  color: rgba(0,0,0,0.8);
  padding: 5px 10px;
  bottom: 0;
  right: 0;
`;

interface Props {
  src: string;
  caption?: any;
}

const CoverImg: React.SFC<Props> = ({ src, caption }) => (
  <Container>
    <Img src={src} />
    {caption && (
      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    )}
  </Container>
);

foo

export default CoverImg;
