import React, { Component } from 'react';
import classNames from 'classnames';
import Link from 'gatsby-link';
import NewsletterSignup from './NewsletterSignup';
import * as styles from './styles.module.scss';

import logo from 'assets/logo.svg';
import hoverLogo from 'assets/logo-hover.svg';

interface IProps {
  visible: boolean;
}

interface IState {
  newsletter: boolean;
}

class Header extends Component<IProps, IState> {
  state: IState = {
    newsletter: false,
  };

  handleSubscribe = (newsletter) => () => {
    this.setState({
      newsletter,
    });
  }

  render() {
    const {
      visible,
    } = this.props;

    return (
      <div
        className={classNames(styles.container, {
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
          <div
            className={classNames(styles.promo, {
              [styles.newsletter]: this.state.newsletter,
            })}
          >
            <span>I send a newsletter for AI people</span>
            <a
              className={styles.subscribeButton}
              onClick={this.handleSubscribe(true)}
            >
              Subscribe <span>Now</span>
            </a>
            <a
              className={classNames(styles.closeNewsletter, {
                [styles.closeVisible]: this.state.newsletter,
              })}
              onClick={this.handleSubscribe(false)}
            >
              Close
            </a>
          </div>
          <div className={styles.flex} />
          <div className={styles.right} />
        </div>
        <NewsletterSignup visible={this.state.newsletter} />
      </div>
    );
  }
}

export default Header;
