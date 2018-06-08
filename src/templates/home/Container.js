import styled from "styled-components";

import {
  SERIF,
  SANS_SERIF,
  media,
} from "layouts/constants";

const Container = styled.div `
  max-width: 1200px;
  padding: 0 40px;
  margin: 0 auto;
  overflow: hidden;

  ${media.tablet`
    width: auto;
    padding: 0 20px;
  `}

  a {
    border-bottom: none;
  }
`;

export default Container;
