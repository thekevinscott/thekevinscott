import React, { Component } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from "../components/Header";
import WebFont from "webfontloader";

import { injectGlobal } from 'styled-components';
import styles from './styles';
import { HEADER_HEIGHT, HEADER_BORDER } from './constants';

injectGlobal`${styles}`;

const threshold = 80;
const getIsOverThreshold = () => window.scrollY > threshold;

class TemplateWrapper extends Component {
  constructor(props) {
    super(props);

    this.state = { shadow: false };
  }

  handleScroll = e => {
    if (getIsOverThreshold() && this.state.shadow === false) {
      this.setState({
        shadow: true,
      });
    } else if (!getIsOverThreshold() && this.state.shadow === true) {
      this.setState({
        shadow: false,
      });
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    WebFont.load({
      google: {
        families: [
          'Lato:400,500,600,700,800,900',
        ],
      },
      typekit: {
        id: "zip7tcb",
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div id="container">
        {this.props.children({
          ...this.props,
          visible: this.state.shadow,
        })}
      </div>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
