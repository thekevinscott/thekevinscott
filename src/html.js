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

module.exports = () => (
  <html {...this.props.htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {this.props.headComponents}
      {getCss()}
    </head>
    <body {...this.props.bodyAttributes}>
      {this.props.preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: this.props.body }}
      />
      {this.props.postBodyComponents}
    </body>
  </html>
)

