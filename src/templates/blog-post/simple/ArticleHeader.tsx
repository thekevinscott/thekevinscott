import React from 'react';
import * as styles from './styles.module.scss';
import classNames from 'classnames';
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
  handleMouseOver?: () => {};
  handleMouseOut?: () => {};
}

const ArticleHeader = ({
  image,
  caption,
  title,
  timeToRead,
  date,
  imageHeight,
  headerIsVisible,
  handleMouseOver,
  handleMouseOut,
}) => {
  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
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
              className={classNames(styles.caption, {
                [styles.bumpedCaption]: headerIsVisible,
              })}
              dangerouslySetInnerHTML={{ __html: `image by ${caption}` }}
            />
          )}
      </div>
      )}
      <div className={styles.title} style={{ maxHeight: imageHeight }}>
        <div className={styles.innerTitle}>
          <h1><span>{title}</span></h1>
          <time>{format(date)}</time>
        </div>
      </div>
    </div>
  );
};

export default ArticleHeader;
