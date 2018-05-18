import {
  PINK,
  GREEN,
  SERIF,
  SANS_SERIF,
} from "layouts/constants";

import styled from "styled-components";

const LETTER_SPACING = 20;

const Content = styled.article `
  max-width: 100%;
  width: 780px;
  box-sizing: border-box;
  position: relative;

  img {
    max-width: 100%;
  }

  .right {
    float: right;
    margin: 0px 0 20px 20px;
  }

  span {
    &.figcaption, &.figcaption_hack {
      text-align: center;
      font-size: 14px;
      font-family: ${SANS_SERIF};
      display: block;
      margin-top: -30px;
      margin-bottom: 40px;
      opacity: 0.9;
    }
  }

  .gatsby-image-outer-wrapper {
    width: 100%;
    background: blue;
    height: 200px;
  }
`;

export default Content;
