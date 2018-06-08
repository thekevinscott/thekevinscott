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
    const URL = `${ROOT}emojis-in-javascript/`;
    console.log(`**********\n\n\n\n URL \n ${URL} \n\n\n\n *******`);
    await page.goto(URL);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Emojis in Javascript');
  });
}, TIMEOUT);
