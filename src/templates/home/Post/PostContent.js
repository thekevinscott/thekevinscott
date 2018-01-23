import styled from "styled-components";

const PostContent = styled.div `
  display: flex;
  flex-direction: column;

  img {
    max-height: 200px;
    margin: 20px 0;
    object-fit: cover;
  }

  p {
    font-size: 16px;
  }
`;

export default PostContent;
