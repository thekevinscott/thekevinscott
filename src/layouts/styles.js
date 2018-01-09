const styles = `
body {
  margin: 0;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    Segoe UI,
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    Fira Sans,
    Droid Sans,
    Helvetica Neue,
    sans-serif;
  color: rgba(0, 0, 0, 0.8);
  line-height: 1.5;
}

a {
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  line-height: 18px;
  -webkit-text-decoration-skip: objects;
}

a:active,
a:hover {
  outline-width: 0;
  border-bottom-color: rgba(0, 0, 0, 0.4);
}

pre {
  font-family: monospace;
  font-size: 1.2em;
  background-color:rgba(0,0,0,.04);
  border-radius:3px;
  font-family:SFMono-Regular,Consolas,Roboto Mono,Droid Sans Mono,Liberation Mono,Menlo,Courier,monospace;padding:0;padding-top:.2em;
  overflow-x: scroll;
  padding: 5px 10px 10px 10px;
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
}

hr::before {
  content: '...';
  display: inline-block;
  margin: 20px auto;
  width: 100%;
  text-align: center;
  color: rgba(0, 0, 0, 0.68);
  position: relative;
  top: -42px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
  padding: 0;
  text-rendering: optimizeLegibility;
  color: inherit;
  line-height: 1.1;
}

h1 {
  margin: 0px 0 20px 0;
  font-size: 2.25rem;
}

h2 {
  margin: 40px 0 20px 0;
  font-size: 1.62671rem;
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

::selection {
  background: #ffb7b7; /* WebKit/Blink Browsers */
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

`
export default styles;
