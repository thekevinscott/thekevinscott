import {
  PINK,
  SERIF,
  SANS_SERIF,
  MONOSPACE,
} from "./constants";

const styles = `
html {
  width: 100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
  font-family: ${SANS_SERIF};
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.58;
  padding: 0;
  display: flex;
  font-size: 1.15rem;

  > div {
    flex: 1;
    display: flex;
    max-width: 100%;
  }
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
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  color: inherit;
  line-height: 1.1;
  font-family: ${SANS_SERIF};
}

p, ul, li {
  margin: 5px 0 32px;
  font-family: ${SERIF};
  line-height: 1.8;
  letter-spacing: 0.4px;
}

h1 {
  margin: 0px 0 20px 0;
  font-size: 1.9rem;
  font-weight: 600;
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
  margin-top: 20px;
  margin-bottom: 40px;
  li, ol {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

::selection {
  background: ${PINK};
}

.gatsby-resp-image-link {
  margin-bottom: 40px;
  border: none;
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

pre {
  font-size: 1.3em;
  background-color:rgba(0,0,0,.04);
  border-radius:3px;
  font-family: ${MONOSPACE};
  overflow-x: scroll;
  margin: 40px 0;
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
  p {
    font-family: ${SANS_SERIF};
  }
  font-style: italic;
  font-size: 135%;
  line-height: 1.7;
  margin: 60px 40px;
  color: rgba(0, 0, 0, 0.7);
}
`
export default styles;
