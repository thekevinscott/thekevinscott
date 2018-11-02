import React from 'react';
import Gist, { match as GistKey } from './Gist';
import * as styles from './styles.module.scss';

type ScriptElement = (props: IScriptProps) => JSX.Element | null;

interface ITypes {
  [index: string]: ScriptElement;
}

const types: ITypes = {
  [GistKey]: Gist,
};

const getEmbed = (src:string = '') => {
  return Object.keys(types).reduce((match: ScriptElement|null, regex: string) => {
    if (match) {
      return match;
    }

    const result = src.match(new RegExp(regex, 'gi'));

    if (!result || result.length === 0) {
      return null;
    }

    return types[regex];
  }, null);
};

export interface IScriptProps {
  src: string;
}

const Script:React.SFC<IScriptProps> = ({
  src,
}) => {
  const Embed = getEmbed(src);
  return Embed ? (
    <div className={styles.container}>
      <Embed src={src} />
    </div>
  ) : <span />;
};

export const KEY = 'script';

export default Script;
