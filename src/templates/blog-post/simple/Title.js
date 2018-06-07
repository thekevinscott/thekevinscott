import React from "react";
import Back from "./Back";
// import ReadTime from "../../components/ReadTime";
import styled from "styled-components";
import {
  format,
} from "utils/getDate";

const Title = styled.div `
  position: absolute;
  box-sizing: border-box;
  left: 0;
  // background-color: pink;
  padding: 100px 0 0 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, 0) 100%);
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 1200px) {
    padding: 100px 0 0 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 5%, rgba(255, 255, 255, 0) 100%);

  }
  @media (max-width: 1100px) {


  }

  @media (max-width: 860px) {
    display: block;

  }

  time {
    grid-column: text;
    font-size: 1.4rem;
    color: rgba(0,0,0,0.4);
    margin: 20px 0 20px 0;
    align-self: center;
    width: 100%;
    max-width: 780px;
  }

  h1 {
    width: 100%;
    max-width: 780px;
    grid-column: text;
    transition-duration: 0.5s;
    font-size: 3.2rem;
    line-height: 1.24;
    letter-spacing: -.015em;
    margin: 0;
    font-size: 4.6rem;
    padding: 0;


    @media (max-width: 1000px) {
      font-size: 3.6rem;
    }
    @media (max-width: 860px) {
      font-size: 3rem;
      margin-bottom: 5px;
    }
    @media (max-width: 660px) {
      font-size: 2.8rem;

    }
  }
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
    <time>{format(date)}</time>
  </Title>
);
