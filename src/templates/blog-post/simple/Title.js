import React from "react";
import Back from "./Back";
// import ReadTime from "../../components/ReadTime";
import styled from "styled-components";
import {
  format,
} from "utils/getDate";
import {
  media,
} from "layouts/constants";

const Container = styled.div `
  // margin: -200px 0 0 0;
  margin: 0;
  padding-top: 100px;
  background: linear-gradient(0deg, rgba(255,255,255,1) 30%, rgba(255,255,255, 0.7) 65%, rgba(255,255,255,0) 100%);
  position: relative;
`;

const Title = styled.div `
  margin: 0 auto;
  max-width: 780px;

  ${media.tablet`
    padding: 0 20px;
  `}

`;

const H1 = styled.h1 `
  width: 100%;
  font-size: 3.2rem;
  line-height: 1.24;
  letter-spacing: -.015em;
  margin: 0;
  font-size: 4.6rem;
  padding: 0;

  ${media.tablet`
  font-size: 3rem;
  margin: 20px 0 5px 0;
  `}
`;

const Time = styled.time `
  color: rgba(0,0,0,0.4);
  font-size: 1.2rem;
`;

export default ({
  title,
  date,
}) => (
  <Container>
    <Title>
      <H1>{title}</H1>
      {/*
      <ReadTime time={Math.floor(time * 0.6)} />
      */}
      <Time>{format(date)}</Time>
    </Title>
  </Container>
);
