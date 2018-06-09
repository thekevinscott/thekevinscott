import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div `
  position: relative;
`;

const CoverImg = styled.img `
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
  background: rgba(255,255,255,0.8);
  color: rgba(0,0,0,0.8);
  padding: 5px 10px;
  bottom: 0;
  right: 0;
`;


export default ({ src, caption }) => (
  <Container>
    <CoverImg src={src} />
    {caption && (
      <Caption dangerouslySetInnerHTML={{ __html: caption }} />
    )}
  </Container>
);
