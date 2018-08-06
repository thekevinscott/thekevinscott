import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

const Caption = ({
  children,
}) => {
  return (
    <span className={styles.container}>{children}</span>
  );
};

Caption.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export const KEY = 'capt';

export default Caption;

