import React from "react";
import styled from "styled-components";
import Link from "gatsby-link";
import SubscribeForm from "components/SubscribeForm";
import {
  DARK_BLUE,
  LIGHT_BLUE,
  media,
} from 'layouts/constants';

const Footer = styled.div `
  width: 100%;
  background-color: ${DARK_BLUE};
  color: rgba(255,255,255,0.95);
  margin-top: 160px;
  padding-top: 60px;

  ${media.tablet`
    margin-top: 0px;
    padding-top: 20px;
  `}
`;

const Container = styled.div `
  max-width: 700px;
  margin: 0 auto;

  ${media.tablet`
    width: auto;
  `}
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
