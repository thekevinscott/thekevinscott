'use strict';

const spawn = require('../utils/spawn');
const jest = require('jest');
const yargs = require('yargs').argv;

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'test';
process.env.NODE_ENV = 'test';
process.env.PUBLIC_URL = '';

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
