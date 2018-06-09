import styled from "styled-components";
import {
  media,
} from "layouts/constants";

const BlogPosts = styled.div `
  padding-top: 40px;
  max-width: 600px;

  ${media.tablet`
    width: auto;
    padding: 0;
  `}
`;

export default BlogPosts;
