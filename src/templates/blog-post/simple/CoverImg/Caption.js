import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import {
  SERIF,
  SANS_SERIF,
} from "layouts/constants";

const Credit = styled.div `
  font-size: 1.2rem;
  font-family: ${SANS_SERIF};
  background: rgba(255,255,255,0.4);
  padding: 0 10px;
  margin: 10px;
  color: black;
  z-index: 9999;
  right: 200px;
  @media (min-width: 1200px) {
    bottom: 30px;
    top: 0;
  }
  @media (max-width: 1200px) {
    top: 0;
    bottom: 30px;


  }
`;

export default ({ caption }) => (
  <Credit
    dangerouslySetInnerHTML={{ __html: caption }}
  />
);
