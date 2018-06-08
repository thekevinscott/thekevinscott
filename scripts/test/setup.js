const chalk = require('chalk');
const puppeteer = require('puppeteer');
const fs = require('fs');
const mkdirp = require('mkdirp');
const os = require('os');
const path = require('path');
const argv = require('yargs').argv;
const spawn = require('../utils/spawn');

const DIR = path.join(os.tmpdir(), 'jest_puppeteer_global_setup');

const start = () => spawn('gatsby', ['serve', '-p', argv.PORT], {
  stdio: 'ignore',
});

start();

module.exports = async () => {
  const browser = await puppeteer.launch();
  // store the browser instance so we can teardown it later
  global.__BROWSER__ = browser;

  // file the wsEndpoint for TestEnvironments
  mkdirp.sync(DIR);
  fs.writeFileSync(path.join(DIR, 'wsEndpoint'), browser.wsEndpoint());
};
