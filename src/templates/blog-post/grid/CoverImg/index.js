import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div `
  position: relative;
`;

const CoverImg = styled.img `
  width: 100%;
  object-fit: cover;
  transition-duration: 0.5s;
  margin: 0;
`;

const Caption = styled.span `
  display: block;
  position: absolute;
  bottom: 0;
  text-align: center;
  font-size: 1.2rem;
  background: white;
  padding: 5px;
`;

export default ({ src, caption }) => (
  <Container>
    <CoverImg src={src} />
        {caption && (
          <Caption
            caption={caption}
          />
        )}
  </Container>
);
