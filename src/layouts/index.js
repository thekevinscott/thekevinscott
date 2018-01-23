import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { injectGlobal } from 'styled-components';
import styles from './styles';

injectGlobal`${styles}`;

const Template = styled.div `
  padding-top: 60px;
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 100%;
`;

const TemplateWrapper = ({ children }) => (
  <Template>
    <Helmet
      title="Kevin Scott"
      description="Design & AI",
      meta={[
      ]}
    />
    {children()}
  </Template>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
