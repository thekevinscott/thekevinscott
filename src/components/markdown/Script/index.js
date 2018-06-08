import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Gist, { match as GistKey } from "./Gist";

const types = {
  [GistKey]: Gist,
};

const getEmbed = (src = "") => {
  return Object.keys(types).reduce((match, regex) => {
    if (match) {
      return match;
    }

    const result = src.match(new RegExp(regex, "gi"));

    return result.length ? types[regex] : null;
  }, null);
};

const Script = ({
  src,
}) => {
  const Embed = getEmbed(src);
  return Embed ? <Embed src={src} /> : <span />;
};

Script.propTypes = {
  src: PropTypes.string.isRequired,
};

export const KEY = "script";

export default Script;
