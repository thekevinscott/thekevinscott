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
  ...props,
}) => {
  const Embed = getEmbed(src);
  if (Embed) {
    return (
      <div className={styles.container}>
        <Embed src={src} />
      </div>
    );
  }
  return <script src={src} {...props} />
};

export const KEY = 'script';

export default Script;
