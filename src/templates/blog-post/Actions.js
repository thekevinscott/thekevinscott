import React from "react";
import styled from "styled-components";

import Back from "./Back";
import ReadTime from "../../components/ReadTime";

const MARGIN = 90;

const Actions = styled.div `
  display: flex;
  z-index: 2;
  width: 100%;
  box-sizing: border-box;
  padding: 0 40px;
  margin-top: -${MARGIN}px;
  margin-bottom: ${MARGIN}px;

  > * {
    display: block;
    flex: 1;
  }

  a {
    border: none;
  }
`;

export default ({
  time,
}) => (
  <Actions>
    <Back />
    <ReadTime time={time} />
  </Actions>
);
