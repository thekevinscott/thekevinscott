import React from "react";
import styled from "styled-components";
import CoverImg from "./CoverImg";
import Title from "./Title";

import {
  HEADER_HEIGHT,
  HEADER_BORDER,
  media,
} from 'layouts/constants';

const Header = styled.header `
  position: relative;
  margin: 0 0 80px 0;
  width: 100%;

  ${media.tablet`
    margin-bottom: 20px;
  `}
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
