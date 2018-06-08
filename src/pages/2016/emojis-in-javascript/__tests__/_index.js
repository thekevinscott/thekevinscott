const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
} = require("scaffolding")();

describe('Emojis in Javscript', async () => {
  beforeAll(async () => {
    page = await getPage();
  });

  beforeEach(async () => {
    await page.goto(`${ROOT}emojis-in-javascript/`);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Emojis in Javascript');
  });
}, TIMEOUT);
