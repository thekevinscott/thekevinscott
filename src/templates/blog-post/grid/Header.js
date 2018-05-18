import React from "react";
import styled from "styled-components";
import CoverImg from "./CoverImg";
import Caption from "./CoverImg/Caption";
import Title from "./Title";

import {
  HEADER_HEIGHT,
  HEADER_BORDER,
} from 'layouts/constants';

const Header = styled.header `
  position: relative;
  margin: 0 0 80px 0;
  overflow: hidden;
  width: 120%;
  max-height: 600px;
  margin-top: -${HEADER_HEIGHT + HEADER_BORDER}px;

  @media (max-width: 1600px) {
    max-height: 400px;
  }
  @media (max-width: 1200px) {
    max-height: 400px;
  }
  @media (max-width: 1000px) {
    max-height: 360px;
  }
  @media (max-width: 860px) {
    max-height: 240px;
  }
  @media (max-width: 760px) {
    max-height: 160px;
  }

  span {
    float: right;
    margin-top: -20px;
  }

`;

export default ({
  image,
  credit,
  title,
  timeToRead,
  date,
}) => (
  <Header>
    { image && (
      <CoverImg
        src={image.childImageSharp.sizes.src}
      />
    )}
    {credit && (
      <Caption
        caption={credit}
      />
    )}
    <Title
      title={title}
      time={timeToRead}
      date={date}
    />
  </Header>
);

