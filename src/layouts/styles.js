import {
  PINK,
  SERIF,
  SANS_SERIF,
  MONOSPACE,
  GREEN,
  HR_DEGREES,
  media,
} from "./constants";

const styles = `
html {
  width: 100%;
  height: 100%;
  font-size: 62.5%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 400;
  padding: 0;
  font-size: 1.6rem;
  font-family: ${SANS_SERIF};

  > div {
    flex: 1;
    display: flex;
    max-width: 100%;
  }
}

* {
  box-sizing: border-box;
}

a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  line-height: 18px;
  -webkit-text-decoration-skip: objects;

  &:active, &:hover {
    outline-width: 0;
    border-bottom-color: rgba(0, 0, 0, 0.4);
  }

  &.anchor {
    border: none;
  }

  &.gatsby-resp-image-link {
    border: none;

    &:hover {
      border: none;
    }
  }

}

hr {
  position: relative;
  box-sizing: content-box;
  overflow: visible;
  padding: 0;
  border: none;
  height: 1px;
  font-weight: 400;
  font-style: italic;
  font-size: 30px;
  letter-spacing: 0.6em;
  background: none;
  margin: 45px auto;
  width: 100%;

  &:before {
    content: '...';
    display: inline-block;
    margin: 20px auto;
    width: 100%;
    text-align: center;
    color: rgba(0, 0, 0, 0.68);
    position: relative;
    top: -42px;
  }

  &.line {
    margin: 100px 0 0 0;
    ${media.tablet`
      margin: 20px 0 40px 0;
    `}

    &:before {
      display: none;
    }

    &:after {
      content: "";
      position: absolute;
      width: 24px;
      height: 11px;
      -webkit-transform: skewY(${HR_DEGREES}deg);
      transform: skewY(${HR_DEGREES}deg);
      // position: absolute;
      // top: -85px;
      margin-left: auto;
      margin-right: auto;
      // left: 48%;
      left: calc(50% - 24px);
      background: -webkit-gradient(linear,left top,left bottom,color-stop(50%,#32325d),color-stop(50%,#fff));
      background: linear-gradient(#32325d 50%,#fff 0);
      background-size: 100% 4px;
    }
  }
}

strong {
  font-weight: 700;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  letter-spacing: -.015em;
  font-weight: 700;
  margin: 0;
  padding: 0;
  font-weight: 600;
  text-rendering: optimizeLegibility;
  color: inherit;
  line-height: 1.1;
  font-family: ${SANS_SERIF};
}

h1, h2 {
  font-family: ${HEADER_FONT};
}

p, ul, li {
  margin: 5px 0 32px;
  font-family: ${SANS_SERIF};
  // font-family: ${SERIF};
  font-size: 1.8rem;
  line-height: 3rem;
}

figcaption, aside, time {
  font-family: ${SANS_SERIF};
}

li {
  margin-bottom: 20px;
}

p {
  // font-size: 2.05rem;
  line-height: 1.7;
}

h1 {
  margin: 0px 0 20px 0;
  font-size: 2.5rem;
}

h2 {
  margin: 40px 0 10px 0;
  font-size: 1.4rem;
}

h3 {
  margin: 40px 0 20px 0;
  font-size: 1.38316rem;
}

h4 {
  font-size: 1rem;
}

h5 {
  font-size: 0.85028rem;
}

h6 {
  font-size: 0.78405rem;
}

iframe {
  padding: 0;
  margin: 0 0 40px 0;
  border: none;
}

ul {
  li, ol {
  }
}

::selection {
  background: ${PINK};
}

.gatsby-resp-image-link {
  margin-bottom: 40px;
  border: none;
}

pre {
  font-size: 1.6em;
  background-color:rgba(0,0,0,.04);
  border-radius:3px;
  font-family: ${MONOSPACE};
  overflow-x: scroll;
  margin: 0 0 20px 0;
  padding: 20px;
  line-height: 1.0;

  code {
    padding: 0;
    background-color: transparent;
    font-size: 100%;
  }
}

code {
  background-color:rgba(0,0,0,.04);
  padding: 2px 5px;
  font-size: 120%;
  white-space: pre-wrap;
}

blockquote {
  display: block;
  text-align: left;
  font-family: ${SANS_SERIF};
  font-size: 2.0rem;
  border-left: 4px solid rgba(0, 0, 0, 0.25);
  padding: 10px 20px;
  margin: 10px 0 40px 0;
  font-style: italic;
  color: rgba(0, 0, 0, 0.7);
  line-height: 1.6;

  p {
    line-height: inherit;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    margin: 0;
  }

  a {
    color: inherit;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  ul, li {
    line-height: inherit;
    color: inherit;
    font-size: inherit;
    font-style: inherit;
    font-family: inherit;
  }

  ul {
    margin: 20px 0;
    padding: 0 0 0 25px;

    li {
      margin-top: 0;
    }

    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
}

iframe {
  height: 400px;
  width: 100%;
  max-width: 800px;
  margin: 30px auto;
}

h1 {
  margin-top: 80px;
  margin-bottom: 0;

  padding: 0;
  text-align: center;
  text-align: left;
  display: block;
  margin: 40px 0 00px 0;
  font-size: 4.5rem;
  clear: both;
  padding-bottom: 20px;

  .anchor {
    margin-left: -16px;
    border: none;

    &:hover {
      border: none;
    }
  }

  a {
    display: block;
    padding-bottom: 10px;
    border: none;

    &:hover {
      border: none;
    }
  }
}

h2 {
  padding: 0;
  font-size: 3.4rem;

  .anchor {
    margin-left: -16px;
    border: none;

    &:hover {
      border: none;
    }
  }

  a {
    display: block;
    line-height: 40px;
    padding-bottom: 10px;
    border-bottom: none;

    &:hover {
      border-bottom: none;
    }
  }
}

h3 {
  font-size: 2.6rem;
  margin-top: 30px;
}

h4, h5, h6 {
  font-size: 2rem;
}

a {
  transition-duration: 0.15s;

  &:hover {
    border-bottom: 1px solid ${GREEN};
  }

  &.gatsby-resp-image-link {
    border: none;

    &:hover {
      border: none;
    }
  }
}

pre {
  font-size: 1.8rem;
}
`
export default styles;
