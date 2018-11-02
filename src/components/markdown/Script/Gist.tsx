import React from 'react';
import ReactGist from 'react-gist';
import { IScriptProps } from './index';

const Gist:React.SFC<IScriptProps> = ({
  src,
}) => {
  const part = src.split('/').pop();
  if (!part) {
    return null;
  }

  const id = part.split('.').shift();
  return (
    <ReactGist id={id} />
  );
};

export const KEY = 'gist';
export const match = 'gist.github.com';

export default Gist;

