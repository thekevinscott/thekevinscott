import React from 'react';
import Back from './Back';
import styled from 'styled-components';
import {
  format,
} from 'utils/getDate';

import {
  media,
  headerHeights,
  YELLOW,
} from 'layouts/constants';

const Container = styled.div `
  // margin: -200px 0 0 0;
  margin: 0;
  // padding-top: 100px;
  position: relative;
  height: ${headerHeights.desktop}px;
  display: flex;
  align-items: flex-end;

  ${media.tablet`
    height: ${headerHeights.tablet}px;
    padding: 0 20px;
  `}

  ${media.phonePlus`
    height: auto;
    padding: 0;
  `}
`;

const START = 15;
const END = 95;

const TRANSPARENT_WHITE = 'rgba(255,255,255,0.65)';

const Title = styled.div `
  margin: 0 auto -25px auto;
  width: 780px;
  max-width: 100%;

  ${media.tablet`
    padding: 0 20px;
    width: 100%;
  `}

  time {
    display: block;
    color: rgba(0,0,0,0.4);
    background: ${TRANSPARENT_WHITE};
    font-size: 1.2rem;
  }

  h1 {
    margin: 0 0 20px 0;

    span {
      background-image: linear-gradient(
        to bottom,
        transparent,
        transparent ${START}%,
        ${TRANSPARENT_WHITE} ${START}%,
        ${TRANSPARENT_WHITE} ${END}%,
        transparent ${END}%,
        transparent);
        // box-shadow: 0.2em 0 0 rgba(255,255,255,0.8), -0.2em 0 0 rgba(255,255,255,0.8);
    }

    ${media.phonePlus`
      font-size: 3.6rem;
      line-height: 3.6rem;
      margin: 10px 0 10px 0;

      span {
        background-image: none;
      }
    `}
  }

    ${media.tablet`
      font-size: 3rem;
      margin: 0px 0 5px 0;
    `}
  }
`;

export default ({
  title,
  date,
}) => (
  <Container>
    <Title>
      <h1><span>{title}</span></h1>
      <time>{format(date)}</time>
    </Title>
  </Container>
);
