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

const Title = styled.div `
  ${media.tablet`
    padding: 0 20px;
  `}

  h1 {
    width: 100%;
    max-width: 780px;
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

  }
`;

const Time = styled.time `
  color: rgba(0,0,0,0.4);
  font-size: 1.2rem;
`;

export default ({
  title,
  date,
}) => (
  <Title>
    <h1>{title}</h1>
    {/*
    <ReadTime time={Math.floor(time * 0.6)} />
    */}
    <Time>{format(date)}</Time>
  </Title>
);
