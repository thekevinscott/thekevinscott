import React, { Component } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Header from "../components/Header";

import { injectGlobal } from 'styled-components';
import styles from './styles';
import { HEADER_HEIGHT, HEADER_BORDER } from './constants';

injectGlobal`${styles}`;

const Container = styled.div `
  width: 100%;
  margin-top: ${HEADER_HEIGHT + HEADER_BORDER}px;
`;

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
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <Container>
        <Header shadow={this.state.shadow} />
        {this.props.children()}
      </Container>
    );
  }
};

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
