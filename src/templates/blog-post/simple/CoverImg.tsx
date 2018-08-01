import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

import {
  media,
  headerHeights
} from 'layouts/constants';

interface Props {
  src: string;
  caption?: any;
}

const CoverImg: React.SFC<Props> = ({ src, caption }) => (
  <div className={styles.coverImg}>
    <img src={src} />
    {caption && (
      <span
        className={styles.caption}
        dangerouslySetInnerHTML={{ __html: `image by ${caption}` }}
      />
    )}
  </div>
);

export default CoverImg;
