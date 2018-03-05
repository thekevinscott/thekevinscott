import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CoverImg = styled.img `
  min-width: 100%;
  object-fit: cover;
  transition-duration: 0.5s;
  margin: 0 0 80px 0;
  @media (max-width: 1600px) {
    max-height: 500px;
  }
  @media (max-width: 1200px) {
    max-height: 420px;
  }
  @media (max-width: 1000px) {
    max-height: 360px;
  }
  @media (max-width: 860px) {
    max-height: 280px;
  }
  @media (max-width: 760px) {
    max-height: 200px;
  }
`;

export default CoverImg;
