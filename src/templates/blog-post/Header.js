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

  h1 {
    transition-duration: 0.5s;
    font-size: 32px;
    line-height: 1.24;
    letter-spacing: -.015em;
    margin: 40px 0 0px 0;
    width: 700px;
    font-size: 4.2rem;
    padding: 20px;
  }

  span {
    float: right;
    margin-top: -20px;
  }

  .title {
    position: absolute;
    width: 100%;
    box-sizing: border-box;
    left: 0;
    background: linear-gradient(0deg, rgba(255, 255, 255, 1) 30%, rgba(255, 255, 255, 0) 100%);
    bottom: 0;
    display: flex;

    align-items: flex-end;
    padding: 120px 40px 20px 40px;

    @media (max-width: 860px) {
      display: block;
    }

    h1 {
      flex: 1;
      margin: 0;
      font-size: 4.6rem;
      padding: 0;

      @media (max-width: 1000px) {
        font-size: 3.6rem;
      }
      @media (max-width: 860px) {
        font-size: 3rem;
        margin-bottom: 5px;
      }
      @media (max-width: 660px) {
        font-size: 2.8rem;
      }
    }
  }
`;

export default Header;
