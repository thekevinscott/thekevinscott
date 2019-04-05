import React from 'react';
import Link from 'gatsby-link';
import SubscribeForm from 'components/SubscribeForm';
import * as styles from './styles.module.scss';

interface IProps {
  form?: any;
  path?: any;
  subscriberTags?: any;
  active?: boolean | string | null;
  onSubscribe: (type: string) => void;
}

const Footer: React.SFC<IProps> = ({
  form,
  subscriberTags,
  path,
  active,
  onSubscribe,
}) => {
  const url = `https://thekevinscott.com${path || '/'}`;
  const newsletter = `https://thekevinscott.com/newsletter`;
  return (
    <React.Fragment>
      <div className={styles.footer}>
        <SubscribeForm
          type="footer"
          form={form}
          active={active}
          onSubscribe={onSubscribe}
          subscriberTags={{
            ...(subscriberTags || {}),
            formPosition: 'footer',
          }}
        />
      </div>
      <div className={styles.printFooter}>
        <p>This content was published by Kevin Scott at <a href={url}>{url}</a>.</p>
        <p>For more articles and updates, subscribe to the newsletter at <a href={newsletter}>{newsletter}</a>. I'd love to hear what you think!</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
