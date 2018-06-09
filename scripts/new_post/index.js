const chalk = require('chalk');
const path = require('path');
const argv = require('yargs').argv;
const fs = require('fs');
const post = argv['_'][0];
const createMarkdown = require('./createMarkdown');
const createTest = require('./createTest');
const getTitle = require('./getTitle');
console.log(chalk.green(`Setting up new post at ${post}`))

const ROOT = path.resolve(__dirname, "../../src/pages");

const parts = post.split("/").filter(p => p).concat(['__tests__']);

parts.reduce((root, piece) => {
  const dir = `${root}/${piece}`;
  if (!fs.existsSync(dir)) {
    console.log(chalk.yellow(`Creating directory ${dir}`));
    fs.mkdirSync(dir);
  }
  return dir;
}, ROOT);

console.log(chalk.yellow(`Creating index.md file`));

const POST_ROOT = path.resolve(ROOT, post);

fs.writeFileSync(path.resolve(POST_ROOT, "index.md"), createMarkdown(post));

console.log(chalk.yellow(`Creating test file`));

fs.writeFileSync(path.resolve(POST_ROOT, "__tests__/_index.js"), createTest(post));

console.log(chalk.green(`${getTitle(post)} created successfully!`));
