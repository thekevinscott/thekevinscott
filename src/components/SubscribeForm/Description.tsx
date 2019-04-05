import React from 'react';
// import Kevin from "./assets/kevinscott-professional.jpg";
import Kevin from './assets/kevinscott-lightning.jpg';
import * as styles from './styles.module.scss';
import {
  media,
} from 'layouts/constants';

interface IProps {
  headline?: string;
  showImage?: boolean;
  description: string | string[];
}

const Description: React.SFC<IProps> = ({
  headline,
  showImage,
  description,
}) => (
  <div className={styles.description}>
    {showImage && (
      <img src={Kevin} alt="Kevin Scott" />
    )}
    <div className={styles.descriptionText}>
    {headline && (
      <h3 data-drip-attribute="headline">{headline}</h3>
    )}
    <div className={styles.content}>
      {[].concat(description).map((d, key) => (
        <p key={key}>{d}</p>
      ))}
    </div>

    </div>
  </div>
);

Description.defaultProps = {
  showImage: true,
};

export default Description;
