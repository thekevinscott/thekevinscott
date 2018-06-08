import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import ReactGist from "react-gist";

const Gist = ({
  src,
}) => {
  const id = src.split("/").pop().split(".").shift();
  return (
    <ReactGist id={id} />
  );
};

Gist.propTypes = {
  src: PropTypes.string.isRequired,
};

export const KEY = "gist";
export const match = "gist.github.com";

export default Gist;

