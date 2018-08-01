import React from 'react';
import {
  DARK_BLUE,
  LIGHT_BLUE,
  HEADER_FONT,
} from 'layouts/constants';
import SubscribeForm, {
  LEAD_MAGNET_DATASET,
} from 'components/SubscribeForm';

const NewsletterSignup = ({
  visible,
}) => (
  <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
    <div className={styles.innerContainer}>
      <div className={styles.inner}>
        <SubscribeForm
          form={LEAD_MAGNET_DATASET}
          descriptionPlacement="above"
          showImage={false}
        />
      </div>
    </div>
  </div>
);

export default NewsletterSignup;
