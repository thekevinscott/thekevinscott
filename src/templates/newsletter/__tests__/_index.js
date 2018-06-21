const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
} = require('scaffolding')();

const {
  getHeadSelectorFn,
} = require('lib');

const siteMetadata = require('gatsby-config').siteMetadata;

describe('/newsletter', () => {
  let page, head;
  beforeAll(async () => {
    page = await getPage();
    head = getHeadSelectorFn(page);
  });

  beforeEach(async () => {
    await page.goto(`${ROOT}newsletter`);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('newsletter');
  });

  // it('should handle multiple slashes', async () => {
  //   await page.goto(`${ROOT}////newsletter`);
  //   const text = await page.evaluate(() => document.body.textContent);
  //   expect(text).toContain('newsletter');
  // });

  it('should contain a form', async () => {
    const el = await page.$('form');
    expect(el).not.toEqual(null);
  });
}, TIMEOUT);
