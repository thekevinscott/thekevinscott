import React from 'react';
import styled from 'styled-components';
import CoverImg from './CoverImg';
import Title from './Title';

import {
  HEADER_HEIGHT,
  HEADER_BORDER,
  media,
} from 'layouts/constants';

const Header = styled.div`
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
  <Header style={{ width: '100%', marginBottom: '80px', position: 'relative' }}>
    { image && (
      <CoverImg
        src={image.childImageSharp.sizes.src}
        caption={credit}
        foo="bar"
      />
    )}
    <Title
      title={title}
      time={timeToRead}
      date={date}
    />
  </Header>
);
