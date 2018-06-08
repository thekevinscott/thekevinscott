'use strict';

const chalk = require('chalk');
const fs = require('fs');
const spawn = require('../utils/spawn');
const jest = require('jest');
const yargs = require('yargs').argv;

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

const BUILD_DIR = "./public";

try {

  [
    `${BUILD_DIR}`,
    `${BUILD_DIR}/index.html`,
    `${BUILD_DIR}/static`,
    `${BUILD_DIR}/rss.xml`,
  ].forEach(fs.statSync);
  console.log(chalk.green('Build dir present and already populated'));
} catch(err) {
  console.log(chalk.red(`I think Public directory is not yet built, please build`));
  console.error(err);
  process.exit(1);
}

spawn('gatsby', ['serve', '-p', yargs.PORT]);

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

jest.run([
  yargs.watch ? "--watch" : null,
].filter(f => f));
