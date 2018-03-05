import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Credit = styled.div `
  text-align: center;
  font-size: 1.2rem;
  margin-top: -70px;
  margin-bottom: 70px;
`;

export default ({ caption }) => (
  <Credit
    dangerouslySetInnerHTML={{ __html: caption }}
  />
);
