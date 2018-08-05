import React from 'react';
// import Kevin from "./assets/kevinscott-professional.jpg";
import Kevin from './assets/kevinscott-lightning.jpg';
import * as styles from './styles.module.scss';
import {
  media,
} from 'layouts/constants';

const Description = ({
  showImage,
  description,
}) => (
  <div className={styles.description}>
    {showImage && (
      <img src={Kevin} alt="Kevin Scott" />
    )}
    <div className={styles.content}>
      {[].concat(description).map((d, key) => (
        <p key={key}>{d}</p>
      ))}
    </div>
  </div>
);

Description.defaultProps = {
  showImage: true,
};

export default Description;
