import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Credit = styled.div `
  font-size: 1.2rem;
  background: rgba(255,255,255,0.4);
  padding: 0 10px;
  margin: 10px;
  position: absolute;
  color: black;
  z-index: 1;
  right: 0;
  @media (min-width: 1200px) {
    bottom: 30px;
  }
  @media (max-width: 1200px) {
    top: 0;
  }
`;

export default ({ caption }) => (
  <Credit
    dangerouslySetInnerHTML={{ __html: caption }}
  />
);
