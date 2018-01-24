import styled from "styled-components";

const PostContent = styled.div `
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    margin: 30px 0 0 0;
    z-index: 2;
    padding: 10px;
  }

  p {
    font-size: 2.0rem;
    margin-bottom: 0;
    padding: 0 20px;
  }
`;

export default PostContent;
