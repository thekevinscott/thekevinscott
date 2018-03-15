import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import { injectGlobal } from 'styled-components';
import styles from './styles';

injectGlobal`${styles}`;

const TemplateWrapper = ({ children }) => children();

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
