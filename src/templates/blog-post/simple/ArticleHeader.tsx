import React from 'react';
import * as styles from './styles.module.scss';
import {
  format,
} from 'utils/getDate';

import {
  media,
} from 'layouts/constants';

const ArticleHeader = ({
  image,
  caption,
  title,
  timeToRead,
  date,
}) => (
  <div className={styles.header}>
    { image && (
      <div className={styles.coverImg}>
        <img src={image.childImageSharp.sizes.src} />
        {caption && (
          <span
            className={styles.caption}
            dangerouslySetInnerHTML={{ __html: `image by ${caption}` }}
          />
        )}
      </div>
    )}
    <div className={styles.title}>
      <div className={styles.innerTitle}>
        <h1><span>{title}</span></h1>
        <time>{format(date)}</time>
      </div>
    </div>
  </div>
);

export default ArticleHeader;
