import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BackA = styled.a `
  font-size: 12px;
  margin-top: -20px;
  float: left;
  border-bottom: 1px solid #CCC;
  transition-duration: 0.2s;

  &:hover {
    border-bottom: 1px solid #333;
  }
`;

const Back = () => (
  <BackA href="/">&larr; Back</BackA>
);

export default Back;
