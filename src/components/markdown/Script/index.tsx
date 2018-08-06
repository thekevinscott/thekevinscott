import React from 'react';
import PropTypes from 'prop-types';
import Gist, { match as GistKey } from './Gist';
import * as styles from './styles.module.scss';
console.log('styles', styles);

const types = {
  [GistKey]: Gist,
};

const getEmbed = (src:string = '') => {
  return Object.keys(types).reduce((match, regex) => {
    if (match) {
      return match;
    }

    const result = src.match(new RegExp(regex, 'gi'));

    return result.length ? types[regex] : null;
  }, null);
};

const Script = ({
  src,
}) => {
  const Embed = getEmbed(src);
  return Embed ? (
    <div className={styles.container}>
      <Embed src={src} />
    </div>
  ) : <span />;
};

Script.propTypes = {
  src: PropTypes.string.isRequired,
};

export const KEY = 'script';

export default Script;
