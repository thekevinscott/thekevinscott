import styled from "styled-components";

import {
  SERIF,
  SANS_SERIF,
} from "../../layouts/constants";

const Container = styled.div `
  width: 700px;
  margin: 0 auto;
  font-family: ${SANS_SERIF};

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    li, ol {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  }

  a {
    border-bottom: none;
  }
`;

export default Container;
