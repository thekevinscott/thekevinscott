const compose = (...fns) => content => fns.reduce((str, fn) => {
  return fn(str);
}, content);

const getImage = options => content => {
  // console.log("options", options);
  // if (options.frontmatter.image) {
  //   return `<img src="${options.frontmatter.image}" />\n${content}`;
  // }

  return content;
};

const getTitle = title => content => {
  return `<h1>${title}</h1>\n${content}`;
};

const processContent = (content, { frontmatter }) => {
  return compose(
    getImage(frontmatter.image),
    getTitle(frontmatter.title),
  )(content);
};

module.exports = processContent;
