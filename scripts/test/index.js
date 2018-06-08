'use strict';

const spawn = require('../utils/spawn');
const jest = require('jest');
const PORT = '6041';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

spawn('gatsby', ['serve', '-p', PORT]);

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

let argv = process.argv.slice(2);

// Watch unless on CI or in coverage mode
if (false && !process.env.CI && argv.indexOf('--coverage') < 0) {
  argv.push('--watch');
}

jest.run(argv);
