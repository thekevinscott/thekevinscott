const styles = `html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  overflow-y: scroll;
}

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
  color: hsla(0, 0%, 0%, 0.8);
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

audio,
canvas,
progress,
video {
  display: inline-block;
}

audio:not([controls]) {
  display: none;
  height: 0;
}

progress {
  vertical-align: baseline;
}

[hidden],
template {
  display: none;
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

b,
strong {
  font-weight: inherit;
  font-weight: bolder;
}

mark {
  background-color: #ff0;
  color: #000;
}

small {
  font-size: 80%;
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

img {
  border-style: none;
  max-width: 100%;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

svg:not(:root) {
  overflow: hidden;
}

code,
kbd,
pre,
samp {
  font-family: monospace;
  font-size: 1em;
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

button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}

button,
input {
  overflow: visible;
}

button,
select {
  text-transform: none;
}

[type=reset],
[type=submit],
button,
html [type=button] {
  -webkit-appearance: button;
}

[type=button]::-moz-focus-inner,
[type=reset]::-moz-focus-inner,
[type=submit]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type=button]:-moz-focusring,
[type=reset]:-moz-focusring,
[type=submit]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

legend {
  box-sizing: border-box;
  color: inherit;
  display: table;
  max-width: 100%;
  padding: 0;
  white-space: normal;
}

textarea {
  overflow: auto;
}

[type=checkbox],
[type=radio] {
  box-sizing: border-box;
  padding: 0;
}

[type=number]::-webkit-inner-spin-button,
[type=number]::-webkit-outer-spin-button {
  height: auto;
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}

[type=search]::-webkit-search-cancel-button,
[type=search]::-webkit-search-decoration {
  -webkit-appearance: none;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit;
}

* {
  box-sizing: inherit;
}

*::before {
  box-sizing: inherit;
}

*::after {
  box-sizing: inherit;
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
  margin: 60px 0 20px 0;
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

ul {
  margin-left: 1.45rem;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  list-style-position: outside;
  list-style-image: none;
}

p {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding: 0;
  margin-bottom: 1.45rem;
}

pre {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  margin-bottom: 1.45rem;
  font-size: 0.85rem;
  line-height: 1.42;
  background: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  overflow: auto;
  word-wrap: normal;
  padding: 1.45rem;
}

table {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  font-size: 1rem;
  line-height: 1.45rem;
  border-collapse: collapse;
  width: 100%;
}

fieldset {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

blockquote {
  margin-left: 1.45rem;
  margin-right: 1.45rem;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

form {
  margin: 0 0 20px 0;
  padding: 0;
}

iframe {
  padding: 0;
  margin: 0 0 40px 0;
  border: none;
}

address {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
}

b {
  font-weight: bold;
}

strong {
  font-weight: bold;
}

th {
  font-weight: bold;
}

code {
  font-size: 0.85rem;
  line-height: 1.45rem;
}

abbr {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}

acronym {
  border-bottom: 1px dotted hsla(0, 0%, 0%, 0.5);
  cursor: help;
}

thead {
  text-align: left;
}

td,
th {
  text-align: left;
  border-bottom: 1px solid hsla(0, 0%, 0%, 0.12);
  font-feature-settings: "tnum";
  -moz-font-feature-settings: "tnum";
  -ms-font-feature-settings: "tnum";
  -webkit-font-feature-settings: "tnum";
  padding-left: 0.96667rem;
  padding-right: 0.96667rem;
  padding-top: 0.725rem;
  padding-bottom: calc(0.725rem - 1px);
}

tt,
code {
  background-color: hsla(0, 0%, 0%, 0.04);
  border-radius: 3px;
  font-family:
    "SFMono-Regular",
    Consolas,
    "Roboto Mono",
    "Droid Sans Mono",
    "Liberation Mono",
    Menlo,
    Courier,
    monospace;
  padding: 0;
  padding-top: 0.2em;
  padding-bottom: 0.2em;
}

pre code {
  background: none;
  line-height: 1.42;
}

code::before,
code::after,
tt::before,
tt::after {
  letter-spacing: -0.2em;
  content: " ";
}

pre code::before,
pre code::after,
pre tt::before,
pre tt::after {
  content: "";
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

::selection {
  background: #ffb7b7; /* WebKit/Blink Browsers */
}

.gatsby-resp-image-link {
  margin-bottom: 40px;
  border: none;
}
`
export default styles;
