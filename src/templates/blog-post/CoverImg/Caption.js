import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Credit = styled.div `
  font-size: 1.2rem;
`;

export default ({ caption }) => (
  <Credit
    dangerouslySetInnerHTML={{ __html: caption }}
  />
);
