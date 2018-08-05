import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';
import * as styles from './styles.module.scss';

export default ({
  form,
  subscriberTags,
  path,
}) => {
  const url = `https://thekevinscott.com${path || '/'}`;
  const newsletter = `https://thekevinscott.com/newsletter`;
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <SubscribeForm
          descriptionPlacement="above"
          form={form}
          subscriberTags={subscriberTags}
        />
      </div>
      <div className={styles.printFooter}>
        <p>This content was published by Kevin Scott at <a href={url}>{url}</a>.</p>
        <p>For more articles and updates, subscribe to the newsletter at <a href={newsletter}>{newsletter}</a>. I'd love to hear what you think!</p>
      </div>
    </React.Fragment>
  );
};
