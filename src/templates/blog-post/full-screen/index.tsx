import React, {
  FC,
} from 'react';
import PropTypes from 'prop-types';
import Header from 'components/Header';
import {
  writeMetaTags,
  getPostData,
  getSubscriberTags,
} from '../utils';
import * as styles from './styles.module.scss';

interface IProps {
}

const FullScreen: FC<IProps> = ({
  children,
  data: {
    markdownRemark: post,
    site: {
      siteMetadata,
    },
  },
}) => {
  const {
    title,
    subtitle,
  } = getPostData(post, siteMetadata);

  return (
    <div className={styles.parent}>
      {writeMetaTags({ post, siteMetadata })}
      {children}
    </div>
  );
}

export default FullScreen;
