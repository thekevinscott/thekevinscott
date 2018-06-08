const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
  parseConfig,
} = require("scaffolding")();

describe('Testing Chatbots', async () => {
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
    const text = await page.evaluate(() => document.querySelector('h1').textContent);
    expect(text).toContain(config.title);
  });
}, TIMEOUT);

