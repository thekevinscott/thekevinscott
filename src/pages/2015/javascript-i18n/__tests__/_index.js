const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
  parseConfig,
} = require("scaffolding")();

describe('Javascript Internationalization', async () => {
  let page, config;
  beforeAll(async () => {
    page = await getPage();
    config = parseConfig(require("../index.md"));
  });

  beforeEach(async () => {
    const url = `${ROOT}${config.path.substring(1)}`;
    await page.goto(url);
  });

  it('should load without error', async () => {
    await page.screenshot({ path: 'foo.png' });
    const text = await page.evaluate(() => document.querySelector('h1').textContent);
    expect(text).toContain(config.title);
    // await page.evaluate(() => {
    //   console.log(document.querySelector('h1'));
    // });
  });

  // it('should position the header correctly', async () => {
  // });
}, TIMEOUT);
