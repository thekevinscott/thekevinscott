import React from 'react';
import favicon from './assets/favicon.ico';

const getCss = () => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <React.Fragment>
        <link media="all" rel="stylesheet" href="/styles.css" />
      </React.Fragment>
    );
  }

  return null;
};


interface IProps {
  htmlAttributes: any;
  headComponents: any;
  bodyAttributes: any;
  preBodyComponents: any;
  body: any;
  postBodyComponents: any;
}

const Html: React.SFC<IProps> = ({
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
      <script
        async={true}
        src="https://platform.twitter.com/widgets.js"
        charSet="utf-8"
      />
    </body>
  </html>
);

export default Html;
