import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

interface IProps {
  children?: any;
  num: string;
}

const Pane: React.SFC<IProps> = ({
  children,
  num,
}) => {
  return (
    <span
      className={styles.pane}
      style={{
        width: `${100/num}%`,
      }}
    >
      {children}
    </span>
  );
};

export const KEY = 'pane';

export default Pane;
