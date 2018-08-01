import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div `
  height: ${props => props.height}px;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  iframe {
    height: 100%;
    border: 1px solid transparent;
    border-radius: 4px;

    ${props => props.border ? `
      border: 1px solid rgba(0,0,0,0.1);
    ` : null }

    width: ${props => props.width}px;
  }
`;

const Frame = ({
  src,
  border,
  width,
  height,
}) => (
  <Container
    width={width}
    height={height}
    border={border}
  >
    <iframe
      src={src}
      width={width}
      height={height}
    />
  </Container>
);

Frame.propTypes = {
  border: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
};

export const KEY = 'embed';

export default Frame;
