import React, { Component } from "react";
import Link from "gatsby-link";
import NewsletterSignup from './NewsletterSignup';
import * as styles from './styles.module.scss';

import logo from "assets/logo.svg";
import hoverLogo from "assets/logo-hover.svg";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = { newsletter: false };
  }

  handleSubscribe = (newsletter) => {
    this.setState({
      newsletter,
    });
  }

  render() {
    const {
      shadow,
      visible,
    } = this.props;

    return (
      <div className={`${styles.container} ${visible ? styles.visible : ''}`}>
        <div className={styles.center}>
          <div className={styles.left}>
            <div className={`${styles.home} ${visible ? styles.visible : ''}`}>
              <Link to="/">
                <img alt="AI + Design" src={logo} />
                <span>
                  <img alt="AI + Design" src={hoverLogo} />
                </span>
              </Link>
            </div>
          </div>
          <div className={styles.flex} />
          <div className={`${styles.promo} ${this.state.newsletter ? styles.shouldShow : ''}`}>
            <span>I send a newsletter for AI people</span>
            <a
              className={styles.subscribeButton}
              onClick={() => this.handleSubscribe(true)}
            >
              Subscribe <span>Now</span>
            </a>
            <a
              className={`${styles.closeNewsletter} ${this.state.newsletter ? styles.closeVisible : ''}`}
              onClick={() => this.handleSubscribe(false)}
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
