import React from "react";
import rehypeReact from "rehype-react";

import Script, { KEY as ScriptKey } from "./Script";
import Caption, { KEY as CaptionKey } from "./Caption";
import Form, { KEY as FormKey } from "./Form";

const components = {
  [FormKey]: Form,
  [ScriptKey]: Script,
  [CaptionKey]: Caption,
};

let renderAst;

// only render once we have access to window
export default (...args) => {
  if (!renderAst) {
    renderAst = new rehypeReact({
      createElement: React.createElement,
      components,
    }).Compiler;
  }

  return renderAst(...args);
};
