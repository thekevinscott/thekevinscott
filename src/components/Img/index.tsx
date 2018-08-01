import React from 'react';
import PropTypes from 'prop-types';
import * as styles from './styles.module.scss';

const Img = ({
  src,
  alt,
  caption,
  align,
}) => {
  return (
    <div className={styles.container}>
      <img src={src} alt={alt} title={caption} />
      {caption && (
        <label>{caption}</label>
      )}
    </div>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  align: PropTypes.string,
};

Img.defaultProps = {
  // align: "center",
};

export const KEY = 'img';

export default Img;
