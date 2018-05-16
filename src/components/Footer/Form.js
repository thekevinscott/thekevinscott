import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Kevin from "./kevinscott.jpg";
import Link from "gatsby-link";
import Form from "../../components/Form";
import {
  DARK_BLUE,
  LIGHT_BLUE,
} from '../../layouts/constants';

const Container = styled.div `
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 100px;

  p {
    font-size: 1.4rem;
    color: inherit;
    margin: 0;
  }

  h3 {
    color: ${LIGHT_BLUE};
    font-size: 23px;
    display: block;
    margin: 0 20px 0 0 ;
    padding: 0 0 15px 0 ;
    line-height: 1.4 ;
    font-weight: bold ;
    text-align: left ;
    clear: none ;
  }

`;

const SIZE = 70;
const Description = styled.div `
  display: flex;
  margin-bottom: 40px;
  align-items: center;

  img {
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE}px;
    margin-right: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

const KEY = "@FooterContainer/";
export const DEEP_LEARNING_JOURNAL = `${KEY}DEEP_LEARNING_JOURNAL`;
export const TENSORFLOWJS = `${KEY}TENSORFLOWJS`;
const config = {
  [DEEP_LEARNING_JOURNAL]: {
    formID: "242548946",
    headline: "Subscribe to the AI and Deep Learning Journal",
    description: "I'm spending 2018 teaching myself AI and deep learning, and I'm journaling my adventure. Sign up below and I'll drop you a line when I publish new articles or find cool new tools.",
  },
  [TENSORFLOWJS]: {
    formID: "277152125",
    headline: "Tensorflow.js and Machine Learning with Javascript",
    description: "I've got ten years of experience building web and mobile apps. I'm excited to journal my progress learning artificial intelligence using Javascript, in Node and in the browser.",
  },
};

const getContainer = key => {
  if (config[key]) {
    return config[key];
  }

  return config[DEEP_LEARNING_JOURNAL];
};

const FormContainer = ({ form }) => {
  const {
    formID,
    headline,
    description,
  } = getContainer(form);

  return (
    <Container
    >
      <Description>
        <img src={Kevin} alt="Kevin Scott" />
        <p>{description}</p>
      </Description>
      <Form
        action={`https://www.getdrip.com/forms/${formID}/submissions`}
        method="post"
        data-drip-embedded-container={formID}
        inputs={[{
          required: true,
          type: "email",
          id: "drip-email",
          name: "fields[email]",
          placeholder: "Email Address",
        }]}
        headline={headline}
      />
    </Container>
  );
};

FormContainer.propTypes = {
  form: PropTypes.string.isRequired,
};

export default FormContainer;
