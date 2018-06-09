const fs = require('fs');
const chalk = require('chalk');
const path = require('path');
const dateFns = require('date-fns');
const getTitle = require('./getTitle');

const sample = fs.readFileSync(path.resolve(__dirname, "test.js"), 'utf8');

const createTest = (post) => {
  const title = getTitle(post);
  return sample.split("\n").map(line => {
    if (line.indexOf('describe') !== -1) {
      return `describe('${title}', async () => {`;
    }
    return line;
  }).join("\n");
};

module.exports = createTest;
