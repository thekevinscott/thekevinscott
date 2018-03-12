import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Span = styled.span `
  font-size: 12px;
  text-align: right;
  display: block;
  grid-column: text;
`;

const ReadTime = ({ time }) => (
  <Span>{time} min read</Span>
);

ReadTime.propTypes = {
  time: PropTypes.number.isRequired,
};

export default ReadTime;
