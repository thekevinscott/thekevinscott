import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

// const Header = () => (
//   <div
//     style={{
//       color: 'black',
//       marginBottom: '1.45rem',
//     }}
//   >
//     <div
//       style={{
//         margin: '0 auto',
//         maxWidth: 640,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             textDecoration: 'none',
//           }}
//         >
//           Kevin Scott
//         </Link>
//       </h1>
//     </div>
//   </div>
// )

const Template = styled.div `
  margin-top: 60px;
`;

const TemplateWrapper = ({ children }) => (
  <Template>
    <Helmet
      title="Kevin Scott"
      meta={[
      ]}
    />
    <div
      style={{
        margin: '20px auto',
        maxWidth: 640,
      }}
    >
      {children()}
    </div>
  </Template>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
