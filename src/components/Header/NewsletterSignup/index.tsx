import React from 'react';
import * as styles from './styles.module.scss';
import SubscribeForm, {
  DEFAULT,
} from 'components/SubscribeForm';

interface IProps {
  visible: boolean;
  subscriberTags?: any;
}

const NewsletterSignup: React.SFC<IProps> = ({
  visible,
  subscriberTags,
}) => (
  <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
    <div className={styles.innerContainer}>
      <div className={styles.inner}>
        <SubscribeForm
          form={DEFAULT}
          descriptionPlacement="above"
          showImage={false}
          subscriberTags={{
            ...(subscriberTags || {}),
            formPosition: 'header',
          }}
        />
      </div>
    </div>
  </div>
);

export default NewsletterSignup;
