import React from 'react';
import CoverImg from './CoverImg';
import Title from './Title';
import * as styles from './styles.module.scss';

import {
  media,
} from 'layouts/constants';

export default ({
  image,
  credit,
  title,
  timeToRead,
  date,
}) => (
  <div className={styles.header}>
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
  </div>
);
