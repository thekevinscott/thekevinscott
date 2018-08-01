import React from 'react';
import styled from 'styled-components';
import CoverImg from './CoverImg';
import Title from './Title';

import {
  media,
} from 'layouts/constants';

const BlogHeader = styled.div`
  background: white;
  position: relative;
  margin: 0 0 80px 0;
  width: 100%;

  ${media.tablet`
    margin-bottom: 20px;
  `}

  @media print {
    margin-bottom: 0;
  }
`;

export default ({
  image,
  credit,
  title,
  timeToRead,
  date,
}) => (
  <BlogHeader id="blog-simple-header">
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
  </BlogHeader>
);
