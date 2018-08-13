export const getPrependedCaption = (caption: string): string => {
  if (caption.indexOf('by') !== -1) {
    return caption;
  }

  return `image by ${caption}`;
};

const isMatch = (parts: string[], incoming: string) => parts.reduce((found, part) => {
  if (found) {
    return true;
  }

  return incoming.indexOf(part) !== -1;
}, false);

export const getExternalCaption = (caption: string): string => {
  return caption.split('<a').map((part) => {
    // if (isMatch([' />'], part)) {
    //   return `${part} target="_blank" `;
    // }

    if (isMatch(['</a>'], part)) {
      return ` target="_blank"${part}`;
      // return `${part} target="_blank" `;
    }

    return part;
  }).join('<a');
};

const getCaption = (caption:string): string => {
  return getExternalCaption(getPrependedCaption(caption));
};

export default getCaption;
