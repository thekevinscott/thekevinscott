import styled from "styled-components";
import {
  media,
} from 'layouts/constants';

const SIZE = 70;
const Description = styled.div `
  display: flex;
  margin-bottom: 40px;
  align-items: center;

  ${media.tablet`
    flex-direction: column;
    margin: 20px;
  `}

  img {
    width: ${SIZE}px;
    height: ${SIZE}px;
    border-radius: ${SIZE}px;
    margin-right: 20px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

export default Description;
