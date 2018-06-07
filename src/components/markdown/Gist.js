import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div `
min-height: 600px;
`;

const Gist = ({
  src,
}) => {
  console.log(src);
  return (
    <Container
    >
      farts!
      <script type="text/javascript" src="https://gist.github.com/thekevinscott/c6d7511bb078dfda54785974ddf8d0de.js" />
      farts
      <div
        dangerouslySetInnerHTML={{ __html: src }}
      />
    </Container>
  );
};

Gist.propTypes = {
  src: PropTypes.string.isRequired,
};

export const KEY = "gist";

export default Gist;
