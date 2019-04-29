import React, {
  FC,
} from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';
import NewsletterSignup from './NewsletterSignup';
import Banner from './Banner';
import * as styles from './styles.module.scss';

import logo from 'assets/logo.svg';
import hoverLogo from 'assets/logo-hover.svg';

interface IProps {
  visible: boolean;
  subscriberTags?: any;
  className?: string;
}

const SHOW_SIGNUP = false;

const Header: FC<IProps> = ({
  visible,
  subscriberTags,
  className,
}) => (
  <div
    className={classNames(styles.container, className, {
      [styles.visible]: visible,
    })}
  >
    <div className={styles.center}>
      <div className={styles.left}>
        <div
          className={classNames(styles.home, {
            [styles.visible]: visible,
          })}
        >
          <Link to="/">
            <img alt="AI + Design" src={logo} />
            <span>
              <img alt="AI + Design" src={hoverLogo} />
            </span>
          </Link>
        </div>
      </div>
      <div className={styles.flex} />
      <div className={styles.right}>
        <Link to="/">Writing</Link>
        <Link to="/speaking">Speaking</Link>
        <Link to="/dljsbook" className={styles.button}>Book</Link>
      </div>
    </div>
  </div>
);

export default Header;
