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
    display: block;
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
    grid-row-end: 9999999;

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
    box-sizing: border-box;
    transition-duration: 0.2s;

    * {
      transition-duration: 0.2s;
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

    @media (max-width: 1100px) {
      max-width: 700px;
      box-shadow: 0 2px 2px rgba(0,0,0,0.2);
      background-color: rgba(0,0,0,0.025);
      border-radius: 5px;
      padding: 10px;
    }
  }

  .name {
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 0px 5px;
    display: inline-block;
    line-height: 25px;
  }

  blockquote, em, .caption, aside {
    .name {
      border: none;
      background: none;
      padding: 0;
    }
  }

  h1 {
    margin-top: 80px;
    margin-bottom: 0;

    padding: 0;
    text-align: center;
    text-align: left;
    display: block;
    margin: 40px 0 00px 0;
    font-size: 4.5rem;
    clear: both;
    padding-bottom: 20px;

    .anchor {
      margin-left: -16px;
      border: none;

      &:hover {
        border: none;
      }
    }

    a {
      display: block;
      padding-bottom: 10px;
      border: none;

      &:hover {
        border: none;
      }
    }

  }

  h2 {
    padding: 0;
    font-size: 3.4rem;

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
      border-bottom: none;

      &:hover {
        border-bottom: none;
      }
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

  .gatsby-image-outer-wrapper {
    width: 100%;
    background: blue;
    height: 200px;
  }

  h3 {
    font-size: 2.6rem;
    margin-top: 30px;
  }

  h4, h5, h6 {
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

  pre {
    font-size: 1.8rem;
  }
`;

export default Content;
