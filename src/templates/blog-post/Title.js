import React from "react";
import Back from "./Back";
// import ReadTime from "../../components/ReadTime";
import styled from "styled-components";

const Title = styled.div `
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  left: 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 1) 10%, rgba(255, 255, 255, 0) 100%);
  padding: 20% 40px 0px 40px;
  bottom: 0;

  display: grid;
  justify-items: stretch;
  grid-column-gap: 20px;
  grid-template-columns: 1fr [page-start] repeat(3, 60px) [text-start] repeat(10, 60px) [text-end] repeat(3, 60px) [page-end] 1fr;
  @media (max-width: 1200px) {
    grid-template-columns: [page-start] repeat(2, 60px) [text-start] repeat(9, 60px) [text-end] repeat(2, 60px) [page-end];
  }
  @media (max-width: 1100px) {
    grid-template-columns: [text-start] 1fr [text-end];
    padding: 0 20px;
  }

  @media (max-width: 860px) {
    display: block;
  }

  h1 {
    grid-column: text;
    transition-duration: 0.5s;
    font-size: 32px;
    line-height: 1.24;
    letter-spacing: -.015em;
    // margin: 40px 0 0px 0;
    // font-size: 4.2rem;
    // padding: 20px;
    margin: 0 0 20px 0;
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
  time,
}) => (
  <Title>
    <Back />
    <h1>{title}</h1>
    {/*
    <ReadTime time={Math.floor(time * 0.6)} />
    */}
  </Title>
);
