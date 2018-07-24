import styled from 'styled-components';
import {
  PINK,
  GREEN,
  SERIF,
  SANS_SERIF,
  media,
} from 'layouts/constants';

const LETTER_SPACING = 20;

const Content = styled.article `
  width: 100%;
  padding: 0 0 20px 0;
  box-sizing: border-box;
  position: relative;
  word-break: break-word;
  flex: 1;
  display: flex;
  flex-direction: column;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  iframe {
    flex: 1;
    max-width: none;
    margin: 0;
  }

  ${media.tablet`
    padding: 0 20px;
  `}

  img {
    max-width: 100%;
  }

  .right {
    float: right;
    margin: 0px 0 20px 20px;
  }


  h1 {
    ${media.tablet`
      font-size: 3.4rem;
    `}
  }

  h2 {
    ${media.tablet`
      font-size: 2.4rem;
    `}
  }

  pre {
    ${media.tablet`
      font-size: 1.4rem;
    `}
  }
`;

export default Content;
