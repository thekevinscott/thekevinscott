import React from "react";
import rehypeReact from "rehype-react";

import Gist, { KEY as GistKey } from "./Gist";

const components = {
  [GistKey]: Gist,
};

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components,
}).Compiler;

export default renderAst;
