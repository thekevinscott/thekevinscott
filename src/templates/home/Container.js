import styled from "styled-components";

import {
  SERIF,
  SANS_SERIF,
} from "../../layouts/constants";

const Container = styled.div `
  width: 700px;
  margin: 0 auto;
  font-family: ${SANS_SERIF};

  a {
    border-bottom: none;
  }
`;

export default Container;
