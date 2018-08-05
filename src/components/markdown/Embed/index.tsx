import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

const Frame = ({
  src,
  border,
  width,
  height,
}) => (
  <Container
    className={classNames(styles.container, {
      [styles.border]: border,
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
    />
  </Container>
);

Frame.propTypes = {
  border: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
};

export const KEY = 'embed';

export default Frame;
