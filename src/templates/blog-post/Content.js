import {
  PINK,
  GREEN,
  SERIF,
  SANS_SERIF,
} from "../../layouts/constants";

import styled from "styled-components";

const Content = styled.div `
  max-width: 100%;
  width: 700px;
  margin-bottom: 100px;

  .caption {
    text-align: center;
    font-size: 1.2rem;
    margin-top: -30px;
    margin-bottom: 50px;
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

  aside {
    &:before {
      content: "🤔";
      display: block;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      padding-bottom: 15px;
      margin-bottom: 15px;
      text-align: center;
    }

    line-height: 1.5;
    font-size: 1.6rem;
    margin: 20px 0 20px 40px;
    text-align: justify;
    hyphens: auto;
    width: 250px;
    margin-right: -125px;
    float: right;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.020);
    padding: 20px;
    font-family: ${SERIF};

    a {
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    }

    p {
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      margin: 20px 0 0 0;

      &:first-child {
        margin-top: 0;
      }
    }
  }

  .dropcap {
    font-family: ${SANS_SERIF};
    float: left;
    --x-height-multiplier: 0.342;
    --baseline-multiplier: 0.22;
    font-weight: 600;
    font-size: 72px;
    padding-top: 6px;
    margin-left: -5px;
    margin-right: 7px;
    letter-spacing: -.03em;
    line-height: .83;
    margin-bottom: -.08em;
  }

  .gatsby-image-outer-wrapper {
    width: 100%;
    background: blue;
    height: 200px;
  }

  h1 {
    margin-top: 60px;
    font-size: 3.4rem;
  }

  h2 {
    font-size: 2.6rem;
    margin-top: 30px;
  }

  h3, h4, h5, h6 {
    font-size: 2rem;
  }

  a {
    transition-duration: 0.15s;

    &:hover {
      border-bottom: 1px solid ${GREEN};
    }

    &.gatsby-resp-image-link {
      border: none;

      &:hover {
        border: none;
      }
    }
  }
`;

export default Content;
