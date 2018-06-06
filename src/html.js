import React from "react";
import styled from "styled-components";
import styleSheet from 'styled-components/lib/models/StyleSheet';
import favicon from "./favicon.png";
import { SNIPPET } from "utils/drip";
import { SNIPPET as mixpanelSnippet } from "utils/mixpanel";

const getCss = () => {
  if (process.env.NODE_ENV === 'production') {
    const styles = styleSheet.rules().map(rule => rule.cssText).join('\n');
    return (
      <style dangerouslySetInnerHTML={{ __html: styles }} />

    );
  }

  return null;
};


const Gatsby = styled.div `
  flex: 1;
  display: flex;
  max-width: 100%;
`;

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
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
      {getCss()}
      <Script
        snippet={mixpanelSnippet}
      />
    </head>
    <body {...bodyAttributes}>
      {preBodyComponents}
      <Gatsby
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
