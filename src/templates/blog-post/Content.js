import {
  PINK,
  GREEN,
  SERIF,
  SANS_SERIF,
} from "../../layouts/constants";

import styled from "styled-components";

const LETTER_SPACING = 20;

const Content = styled.article `
  max-width: 100%;
  box-sizing: border-box;
  position: relative;

  display: grid;
  justify-items: stretch;
  grid-column-gap: 20px;
  grid-template-columns: [page-start] repeat(3, 60px) [text-start] repeat(10, 60px) [text-end] repeat(3, 60px) [page-end];
  @media (max-width: 1200px) {
    grid-template-columns: [page-start] repeat(2, 60px) [text-start] repeat(9, 60px) [text-end] repeat(2, 60px) [page-end];
  }
  @media (max-width: 1100px) {
    grid-template-columns: [text-start] 1fr [text-end];
    padding: 0 20px;
  }

  > * {
    grid-column: text;
  }

  img {
    max-width: 100%;
  }

  figcaption, aside {
    color: rgba(0, 0, 0, 0.4);

    .caption {
      text-align: left;
      margin: 0 0 5px 0;

      a {
        border: none;
      }
    }

    grid-column-start: text-end;
    grid-column-end: page-end;

    @media (max-width: 1100px) {
      position: relative;
      grid-column: text;
      margin: 20px 0 40px 0;

      .caption {
        text-align: center;
      }
    }

    &.left {
      grid-column-start: page-start;
      grid-column-end: text-start;
      @media (max-width: 860px) {
        grid-column: text;
      }
    }
  }

  aside {
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.4rem;
    line-height: 1.7;
    transition-duration: 0.2s;

    * {
      transition-duration: 0.2s;
    }

    &:hover {
      color: rgba(0, 0, 0, 0.8);

      strong {
        color: rgba(0, 0, 0, 0.7);
      }

      h1, h2, h3, h4, h5, h6 {
        color: rgba(0, 0, 0, 0.7);
      }
    }

    p {
      font-size: inherit;
      line-height: inherit;
    }

    strong {
      color: rgba(0, 0, 0, 0.5);
    }

    h1, h2, h3, h4, h5, h6 {
      color: rgba(0, 0, 0, 0.4);
    }
  }

  .name {
    // background: rgba(0, 0, 0, 0.05);
    border-radius: 3px;
    font-family: ${SANS_SERIF};
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0px 5px;
    display: inline-block;
    line-height: 28px;
  }

  blockquote, em, .caption, aside {
    .name {
      border: none;
      background: none;
      padding: 0;
    }
  }

  h1 {
    padding: 0;

    .anchor {
      margin-left: -16px;
      border: none;

      &:hover {
        border: none;
      }
    }

    a {
      display: block;
      line-height: 40px;
      padding-bottom: 10px;
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      &:hover {
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      }
    }

    &.center {
      text-align: center;
      text-align: left;
      display: block;
      // margin: 100px auto 80px auto;
      margin: 40px 0 40px 0;
      font-size: 4.5rem;
      clear: both;
      padding-bottom: 20px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);

      span {
        background: white;
        display: inline-block;
        // padding: 0 15px;
      }

      // &:after {
      //   content: "";
      //   border-bottom: 2px solid rgba(0, 0, 0, 0.2);
      //   width: 100%;
      //   display: block;
      //   margin-top: -${4.5/2}rem;
      // }
    }

  }

  .caption {
    text-align: center;
    font-size: 1.2rem;
    margin-top: -30px;
    margin-bottom: 50px;
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

/*
  aside {

    h1, h2, h3 {
      text-align: left;
      padding: 0;
      margin: 0 0 15px 0;
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
    // font-family: ${SERIF};

    &.center {
      margin: 20px auto 40px auto;
      line-height: 2.8rem;
      float: none;
      width: 60%;
    }

    &.left {
      float: left;
      margin-right: 20px;
      margin-left: -125px;
    }

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
  */

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
    margin-top: 80px;
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
