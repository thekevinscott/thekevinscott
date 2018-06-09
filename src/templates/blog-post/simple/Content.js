import {
  PINK,
  GREEN,
  SERIF,
  SANS_SERIF,
  media,
} from "layouts/constants";

import styled from "styled-components";

const LETTER_SPACING = 20;

const Content = styled.article `
  width: 100%;
  max-width: 780px;
  box-sizing: border-box;
  position: relative;
  word-break: break-word;

  ${media.tablet`
    padding: 0 20px;
  `}

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

  blockquote {
    ${media.tablet`
      border-left: none;
      font-size: 1.4rem;
    `}
  }

  h1 {
    ${media.tablet`
      font-size: 3.4rem;
    `}
  }

  h2 {
    ${media.tablet`
      font-size: 2.4rem;
    `}
  }

  pre {
    ${media.tablet`
      font-size: 1.4rem;
    `}
  }
`;

export default Content;
