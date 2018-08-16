const compose = (...fns) => content => fns.reduce((str, fn) => {
  return fn(str);
}, content);
const config = require('../../../gatsby-config');
const ROOT = process.env.ROOT_URL ? `https://${process.env.ROOT_URL}` : config.siteMetadata.url;

const getCoverImage = (image, filePath) => content => {
  if (image) {
    const path = [
      ROOT,
      ...filePath.split("/").slice(0, -1),
      image
    ].join("/");
    return `<img src="${path}" />\n${content}`;
  }

  return content;
};

const getTitle = title => content => {
  return `<h1>${title}</h1>\n${content}`;
};

const isValidElement = arr => line => arr.reduce(({ present, remainingLine }, part) => {
  if (!present) {
    return { present: false };
  }

  const index = remainingLine.indexOf(part);

  return {
    present: index !== -1,
    remainingLine: remainingLine.substring(index),
  };
}, {
  present: true,
  remainingLine: line,
}).present;

const isValidLink = isValidElement([
  '[',
  ']',
  '(',
  ')',
]);
const isValidImg = isValidElement([
  '!',
  '[',
  ']',
  '(',
  ')',
]);

const parseQuoteLine = line => line.substring(2).replace("\\\-", "-");

// const getQuote = () => content => {
//   let quoteOpen = false;
//   return content.split("\n").reduce((c, line) => {
//     if (!quoteOpen && line.substring(0, 1) === ">") {
//       quoteOpen = true;
//       return `${c}<blockquote>${c}${parseQuoteLine(line)}<br /><br />\n`;
//     } else if (quoteOpen) {
//       if (line.substring(0, 1) !== ">") {
//         quoteOpen = false;
//         return `${c}</blockquote><br />${line}\n`;
//         return '<<<<<<';
//       }

//       return `${c}${parseQuoteLine(line)}<br /><br />\n`;
//     }
//     return `${c}${line}\n`;
//   }, "");
// };

const parseImg = line => [
  '[',
  '(',
].reduce((obj, part) => {
  const {
    remainingLine,
  } = obj;

  const index = remainingLine.indexOf(part) + 1;
  if (part === "[") {
    const endingIndex = remainingLine.indexOf("]");
    return {
      ...obj,
      remainingLine: remainingLine.substring(endingIndex + 1),
      alt: remainingLine.substring(index, endingIndex),
    };
  } else if (part === "(") {
    const endingIndex = remainingLine.indexOf(")");
    const [
      src,
      ...title
    ] = remainingLine.substring(index, endingIndex).split(" ");

    return {
      ...obj,
      src,
      title: title.join(" "),
      remainingLine: remainingLine.substring(index),
    };
  }

  return {
    src,
    title,
    alt,
    remainingLine: remainingLine.substring(index),
  };
}, {
  remainingLine: line,
  src: null,
  alt: null,
  title: null,
});

const getImages = (filePath) => content => {
  return content.split("\n").map(line => {
    if (isValidImg(line) && line.indexOf("Medium Clap") === -1) {
      const {
        alt,
        title,
        src,
      } = parseImg(line);

      const path = [
        ROOT,
        ...filePath.split("/").slice(0, -1),
        src.split(`${ROOT}/`).pop(),
      ].join("/");

      console.log(path);

      return `![${alt}](${path} ${title})`;
    }
    return line;
  }).join("\n");
};

const processContent = (content, {
  frontmatter,
  // postUrl,
  // siteUrl,
  // slug,
}, filePath) => {
  return compose(
    getCoverImage(frontmatter.image, filePath),
    getTitle(frontmatter.title),
    // getQuote(),
    getImages(filePath),
  )(content);
};

module.exports = processContent;
