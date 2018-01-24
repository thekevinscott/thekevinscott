import styled from "styled-components";

const Info = styled.div `
  display: flex;
  color: rgba(0,0,0,0.54);
  font-size: 1.2rem;
  flex: 1;
  padding: 20px;

  * {
    flex: 1;
  }

  a {
    color: inherit;
  }
  a:hover {
    color: rgba(0,0,0,0.74);
  }
`;

export default Info;
