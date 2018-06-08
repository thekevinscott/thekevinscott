import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import SubscribeForm, {
  TENSORFLOWJS,
} from "components/SubscribeForm";
import {
  DARK_BLUE,
  LIGHT_BLUE,
} from '../../layouts/constants';

const Footer = styled.div `
  width: 100%;
  background-color: ${DARK_BLUE};
  color: rgba(255,255,255,0.95);
  margin-top: 160px;
  padding-top: 60px;
`;

const Container = styled.div `
  max-width: 700px;
  margin: 0 auto;
`;

export default ({
  form,
  subscriberTags,
}) => {
  return (
    <Footer>
      <SubscribeForm
        descriptionPlacement="above"
        form={form}
        subscriberTags={subscriberTags}
      />
    </Footer>
  );
};
