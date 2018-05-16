import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import Form, {
  DEEP_LEARNING_JOURNAL,
} from "./Form";
import {
  DARK_BLUE,
  LIGHT_BLUE,
} from '../../layouts/constants';

const Footer = styled.div `
  width: 100%;
  background-color: ${DARK_BLUE};
  color: rgba(255,255,255,0.95);
  margin-top: 60px;
  padding-top: 60px;
`;

const Container = styled.div `
  max-width: 700px;
  margin: 0 auto;
`;

export default ({ form }) => {
  return (
    <Footer>
      <Form form={form || DEEP_LEARNING_JOURNAL} />
    </Footer>
  );
};
