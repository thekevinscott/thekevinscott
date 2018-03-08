import styled from "styled-components";

const Header = styled.header `
  position: relative;
  margin: 0 0 80px 0;
  overflow: hidden;
  width: 100%;

  @media (max-width: 1600px) {
    max-height: 400px;
  }
  @media (max-width: 1200px) {
    max-height: 340px;
  }
  @media (max-width: 1000px) {
    max-height: 300px;
  }
  @media (max-width: 860px) {
    max-height: 240px;
  }
  @media (max-width: 760px) {
    max-height: 160px;
  }

  span {
    float: right;
    margin-top: -20px;
  }

`;

export default Header;
