import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Caption from 'components/markdown/Caption';
import * as styles from './styles.module.scss';

interface IProps {
  border?: number;
  frameborder?: number;
  allow?: string;
  allowfullscreen?: boolean;
  width?: number;
  height?: number;
  caption?: string;
  src: string;
}

const Embed: React.SFC<IProps> = ({
  border,
  frameborder,
  allow,
  allowfullscreen,
  width,
  height,
  caption,
  src,
}) => (
  <React.Fragment>
    <span
      className={classNames(styles.container, {
        [styles.border]: border || frameborder,
      })}
      style={{
        height,
        width,
      }}
    >
      <iframe
        src={src}
        width={width}
        height={height}
        allow={allow}
        allowFullScreen={allowfullscreen}
      />
    </span>
    {caption && (
      <Caption>{caption}</Caption>
    )}
  </React.Fragment>
);

export const KEY = 'embed';

export default Embed;
