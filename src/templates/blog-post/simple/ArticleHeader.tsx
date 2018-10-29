import React from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
import getCaption from 'utils/getCaption';
import {
  format,
} from 'utils/getDate';

import {
  media,
} from 'layouts/constants';

interface IProps {
  image?: {
    childImageSharp: {
      sizes: {
        src: string;
      }
    };
  };
  caption?: string;
  title: string;
  timeToRead?: any;
  date: string;
  imageHeight?: number;
  headerIsVisible: boolean;
}

const ArticleHeader = ({
  image,
  caption,
  title,
  timeToRead,
  date,
  imageHeight,
  headerIsVisible,
}) => (
  <div
    className={classNames(styles.header, {
      [styles.missingCoverImage]: !image,
    })}
  >
    { image && (
      <div
        className={styles.coverImg}
        style={{ maxHeight: imageHeight }}
      >
        <img src={image.childImageSharp.sizes.src} />
        {caption && (
          <span
            className={styles.caption}
            style={{
              top: headerIsVisible ? 63 + window.scrollY : 0,
            }}
            dangerouslySetInnerHTML={{ __html: getCaption(caption) }}
          />
        )}
    </div>
    )}
    <div className={styles.title} style={{ maxHeight: imageHeight }}>
      <div className={styles.innerTitle}>
        <h1><span>{title}</span></h1>
        {date && <time>{format(date)}</time>}
      </div>
    </div>
  </div>
);

export default ArticleHeader;
