import React from 'react';
import * as styles from './styles.module.scss';
import {
  format,
} from 'utils/getDate';

const GridHeader = ({
  image,
  credit,
  title,
  date,
}) => (
  <div className={styles.header}>
    { image && (
      <div className={styles.coverImg}>
        <img src={image.childImageSharp.sizes.src} />
      </div>
    )}
    {credit && (
      <div
        className={styles.credit}
        dangerouslySetInnerHTML={{ __html: credit }}
      />
    )}
    <div className={styles.title}>
      <h1>{title}</h1>
      <time>{format(date)}</time>
    </div>
  </div>
);

export default GridHeader;
