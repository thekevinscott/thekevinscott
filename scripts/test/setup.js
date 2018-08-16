const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const argv = require('yargs').argv;
const spawn = require('../utils/spawn');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

const start = () => {
  const child = spawn('gatsby', ['serve', '-p', argv.PORT]);
  if (child.stdout && child.stdout.on) {
    child.stdout.on('data', data => {
      console.log(`stdout ${data}`);
    });
  }
  if (child.stderr && child.stderr.on) {
    child.stderr.on('data', data => {
      console.log(`stderr ${data}`);
    });
  }

  return child;
};

start();

module.exports = async () => {
  const browser = await puppeteer.launch();
  // store the browser instance so we can teardown it later
  global.__BROWSER__ = browser;

  // file the wsEndpoint for TestEnvironments
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
