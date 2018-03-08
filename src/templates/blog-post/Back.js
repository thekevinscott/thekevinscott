import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const BackA = styled.a `
  display: block;
  grid-column-start: page-start;
  grid-column-end: text-start;
  font-size: 1.2rem;
  border: none;
  margin-top: 30px;
  text-align: right;
`;

const Back = () => (
  <BackA href="/">&larr; Back</BackA>
);

export default Back;
