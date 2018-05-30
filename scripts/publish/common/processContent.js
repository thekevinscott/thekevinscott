const compose = (...fns) => content => fns.reduce((str, fn) => {
  return fn(str);
}, content);

const GITHUB_ROOT = "https://github.com/thekevinscott/thekevinscott/raw/master";

const getImage = (image, filePath) => content => {
  console.log("INCOMING", image);
  if (image) {
    const path = [
      GITHUB_ROOT,
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

const processContent = (content, {
  frontmatter,
  // postUrl,
  // siteUrl,
  // slug,
}, filePath) => {
  return compose(
    getImage(frontmatter.image, filePath),
    getTitle(frontmatter.title),
  )(content);
};

module.exports = processContent;
