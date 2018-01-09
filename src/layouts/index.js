import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import { injectGlobal } from 'styled-components';
import styles from './styles';

injectGlobal`${styles}`;

const Template = styled.div `
  margin-top: 60px;
`;

const TemplateWrapper = ({ children }) => (
  <Template>
    <Helmet
      title="Kevin Scott"
      meta={[
      ]}
    />
    <div
      style={{
        margin: '20px auto',
        maxWidth: 640,
      }}
    >
      {children()}
    </div>
  </Template>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
