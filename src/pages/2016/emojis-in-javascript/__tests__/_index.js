const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
} = require("scaffolding")();

describe('Emojis in Javscript', async () => {
  let page;
  beforeAll(async () => {
    page = await getPage();
  });

  beforeEach(async () => {
    const URL = `${ROOT}emojis-in-javascript/`;
    await page.goto(URL);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Emojis in Javascript');
  });
}, TIMEOUT);
