import styled from "styled-components";

import {
  LIGHT_BLUE,
  LIGHT_GRAY,
  media,
} from 'layouts/constants';

const Container = styled.form `
  margin: 0 auto 0 auto;
  max-width: 100%;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  padding: 20px;
  background: white;
  border-radius: 5px;
  box-sizing: border-box;
  ${media.tablet`
    border-radius: 0;
  `}

  input {
    padding: 10px;
    font-size: 1.6rem;
    margin: 20px 0;
    padding: 10px 12px;
    height: auto;
    color: rgba(0,0,0,0.6);
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    background-image: none;
    min-width: 0;
    min-height: 0;
    width: 300px;
    ${media.tablet`
      width: 100%;
    `}

    &[type=submit] {
      border-radius: 10px;
      color: white;
      transition-duration: 0.2s;
      background-color: ${LIGHT_BLUE};
      border: 2px solid white;
      font-size: 15px;
      width: 140px;
      cursor: pointer;
      display: inline-block;
      height: auto;
      padding: 15px;
      margin: 0;

      &:disabled {
        color: ${LIGHT_GRAY};
        border: 2px solid ${LIGHT_GRAY};
        background-color: white;
        cursor: default;
      }
    }
  }
`;

export default Container;
