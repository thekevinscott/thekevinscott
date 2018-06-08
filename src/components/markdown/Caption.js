import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.span `
  display: block;
  text-align: center;
  font-size: 1.2rem;
  margin-top: -30px;
  margin-bottom: 50px;
`;

const Caption = ({
  children,
}) => {
  return (
    <Container>{children}</Container>
  );
};

Caption.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export const KEY = "capt";

export default Caption;
