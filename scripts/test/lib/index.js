const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
  parseConfig,
} = require("scaffolding")();

const getTitleText = async (page) => {
  return await page.evaluate(() => document.querySelector('h1').textContent);

};

const getTitlePosition = async (page, config) => {
  const obj = await page.evaluate(() => {
    return JSON.stringify(document.querySelector('h1').getBoundingClientRect());
  });
  return JSON.parse(obj);
};

const dimensions = {
  macbook: {
    width: 1440,
    height: 803,
  },
};

const getHeadSelectorFn = page => async (selector, attribute) => await page.evaluate(({ selector, attribute = 'content' }) => {
  const el = document.head.querySelector(selector);
  if (selector.indexOf('title') === 0) {
    return el.textContent;
  }

  return el.getAttribute(attribute);
}, { selector, attribute });

module.exports = {
  dimensions,
  getTitleText,
  getTitlePosition,
  getHeadSelectorFn,
};
