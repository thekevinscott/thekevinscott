import styled from "styled-components";
import {
  LIGHT_BLUE,
} from 'layouts/constants';

const Container = styled.div `
  max-width: 700px;
  margin: 0 auto;
  padding-bottom: 100px;

  p {
    font-size: 1.4rem;
    color: inherit;
    margin: 0;
  }

  h3 {
    color: ${LIGHT_BLUE};
    font-size: 23px;
    display: block;
    margin: 0 20px 0 0 ;
    padding: 0 0 15px 0 ;
    line-height: 1.4 ;
    font-weight: bold ;
    text-align: left ;
    clear: none ;
  }

`;

export default Container;
