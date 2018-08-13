export const getPrependedCaption = (caption: string): string => {
  if (caption.indexOf('by') !== -1) {
    return caption;
  }

  return `image by ${caption}`;
};

export const getExternalCaption = (caption: string): string => {
  return caption.split('<a').map((part) => {
    if (part.indexOf(' />') !== -1) {
      return ` target="_blank"${part}`;
    }

    return part;
  }).join('<a');
};

const getCaption = (caption:string): string => {
  return getExternalCaption(getPrependedCaption(caption));
};

export default getCaption;
