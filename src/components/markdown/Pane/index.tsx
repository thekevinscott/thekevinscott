import React from 'react';
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
    >
      {children}
    </span>
  );
};

export const KEY = 'pane';

export default Pane;
