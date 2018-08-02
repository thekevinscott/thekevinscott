import React from "react";
import styleSheet from 'styled-components/lib/models/StyleSheet';
import favicon from "./assets/favicon.ico";
import { SNIPPET } from "utils/drip";

const getCss = () => {
  if (process.env.NODE_ENV === 'production') {
    const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return (
      <React.Fragment>
        <style dangerouslySetInnerHTML={{ __html: styles }} />
        <link crossorigin="anonymous" media="all" rel="stylesheet" href="/styles.css" />
      </React.Fragment>
    );
  }

  return null;
};


const Script = ({ snippet }) => (
  <script type="text/javascript"
    dangerouslySetInnerHTML={{ __html: snippet }}
  />
);

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
      <link rel="shortcut icon" href={favicon} type="image/png" />
      <meta name="google-site-verification" content="z477EQkGBkIUEW_mPkS8cNVxi5n0sxBsmLsOX4q6Aoo" />
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
      <Script
        snippet={SNIPPET}
      />
    </body>
  </html>
);
