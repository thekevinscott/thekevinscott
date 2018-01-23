import styled from "styled-components";

const StyledPost = styled.div `
  box-shadow: 0 1px 4px rgba(0,0,0,.04);
  border: 1px solid rgba(0,0,0,.09);
  border-radius: 3px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;

  a {
    border-bottom: none;
  }

  h2 {
    font-size: 26px;
    margin-left: -1.88px;
    line-height: 1.04;
    letter-spacing: -.015em;
    font-weight: 700;
  }
`;

export default StyledPost;
