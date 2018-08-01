import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  media,
  headerHeights
} from 'layouts/constants';

const Container = styled.div `
  position: relative;
  height: ${headerHeights.desktop}px;
  overflow: hidden;
  position: absolute;

  ${media.phonePlus`
    position: relative;
    background: white;
    max-height: ${headerHeights.phone}px;

    &:after {
      display: none;
    }
  `}

  &:after {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 100%;
    background: linear-gradient(
      0deg,
      rgba(255,255,255,1.0) 0%,
      rgba(255,255,255,0) 40%
    );
  }

  @media print {
    position: relative;
    height: auto;
  }
`;

const Img = styled.img `
  width: 100%;
  object-fit: cover;
  display: block;
  transition-duration: 0.5s;
  margin: 0;

  @media print {
    max-width: 500px;
  }
`;

const Caption = styled.span `
  position: absolute;
  display: block;
  font-size: 1.2rem;
  z-index: 2;
  background: rgba(255,255,255,0.8);
  color: rgba(0,0,0,0.8);
  padding: 5px 10px;
  // bottom: 0;
  // bottom: 140px;
  top: 40px;
  top: 0;
  right: 0;

  ${media.phonePlus`
    position: relative;
  `}

  @media print {
    position: relative;
  }
`;

interface Props {
  src: string;
  caption?: any;
}

const CoverImg: React.SFC<Props> = ({ src, caption }) => (
  <Container>
    <Img src={src} />
    {caption && (
      <Caption dangerouslySetInnerHTML={{ __html: `image by ${caption}` }} />
    )}
  </Container>
);

export default CoverImg;
