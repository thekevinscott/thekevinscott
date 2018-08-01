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

  @media print {
    display: none;
  }
`;

const PrintFooter = styled.div `
  display: none;
  margin-top: 80px;
  width: 100%;

  @media print {
    display: block;
  }
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
  path,
}) => {
  const url = `https://thekevinscott.com${path}`;
  const newsletter = `https://thekevinscott.com/newsletter`;
  return (
    <React.Fragment>
      <Footer>
        <SubscribeForm
          descriptionPlacement="above"
          form={form}
          subscriberTags={subscriberTags}
        />
      </Footer>
      <PrintFooter>
        <p>This content was published by Kevin Scott at <a href={url}>{url}</a>.</p>
        <p>For more articles and updates, subscribe to the newsletter at <a href={newsletter}>{newsletter}</a>. I'd love to hear what you think!</p>
      </PrintFooter>
    </React.Fragment>
  );
};
