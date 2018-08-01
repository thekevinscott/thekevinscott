import Color from 'color';
import styled, { css } from "styled-components";

export const PINK = "#ffb7b7";
export const GREEN = "#1C9963";
export const LIGHT_GRAY = "rgba(100,100,100,0.2)";
export const YELLOW = "#fff329b3";
export const BLUE = "#100382bd";
// export const LIGHT_BLUE = "#8391DF";
export const LIGHT_BLUE = BLUE;
// export const DARK_BLUE = "rgba(45,67,104,0.95)";
export const DARK_BLUE = Color("rgba(45,67,104,0.95)").darken(0.1).desaturate(0.1).string();
// export const DARK_BLUE = Color(BLUE).darken(0.6).desaturate(0.3).string();
export const HEADER_HEIGHT = 60;
export const HEADER_BORDER = 3;
export const SERIF = `
    Source Serif Pro,
    Georgia,
    serif;
`;
export const SANS_SERIF = `
    -apple-system,
    BlinkMacSystemFont,
    Lato,
    Droid Sans,
    Helvetica Neue,
    sans-serif
`;
export const HEADER_FONT = `
  "sofia-pro",
  ${SANS_SERIF}
`;

export const MONOSPACE = `SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace`;

export const HR_DEGREES = -12;

const sizes = {
  giant: 1170,
  desktop: 992,
  tablet: 768,
  phonePlus: 415,
  phone: 376
};

// iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16;
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `;
  return accumulator;
}, {});

export const headerHeights = {
  desktop: 400,
  tablet: 300,
  phone: 160,
};
