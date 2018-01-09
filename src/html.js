import React from "react";
const favicon = "foo";
import styleSheet from 'styled-components/lib/models/StyleSheet';
// import favicon from "./favicon.png";

const getCss = () => {
  if (process.env.NODE_ENV === 'production') {
    const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return (
      <style dangerouslySetInnerHTML={{ __html: styles }} />

    );
  }

  return null;
};

module.exports = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  body,
  postBodyComponents,
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
      {getCss()}
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);
