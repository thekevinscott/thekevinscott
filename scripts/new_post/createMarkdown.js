const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const dateFns = require('date-fns');
const getTitle = require('./getTitle');

const sample = fs.readFileSync(path.resolve(__dirname, "index.md"), 'utf8');

const createMarkdown = (post) => sample.split("\n").map(line => {
  if (line.indexOf("path") !== -1) {
    const postPath = post.split("/").pop();
    return `path: /${postPath}/`;
  } else if (line.indexOf("date") !== -1) {
    const format = "YYYY-MM-DDThh:mm";
    return `date: ${dateFns.format(new Date(), format)}:00.000Z`;
  } else if (line.indexOf("title") !== -1) {
    const title = getTitle(post);
    return `title: "${title}"`;
  }
  return line;
}).join("\n");

module.exports = createMarkdown;
