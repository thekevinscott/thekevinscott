import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div `
  margin: 20px 0 50px 0;

  img {
    margin: 0 auto;
    max-width: 100%;
    display: block;
  }
`;

const Caption = styled.label `
  font-size: 1.4rem;
  display: block;
  text-align: center;
  margin-top: 20px;
`;

const Img = ({
  src,
  alt,
  caption,
  align,
}) => (
  <Container align={align}>
    <img src={src} alt={alt} title={caption} />
    {caption && (
      <Caption>{caption}</Caption>
    )}
  </Container>
);

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  caption: PropTypes.string,
  align: PropTypes.string,
};

Img.defaultProps = {
  align: "center",
};

export const KEY = "img";

export default Img;
