const argv = require('yargs').argv;

const timeout = 2000;

const clickAndWaitForNavigation = async (page, selector, waitOptions = {}) => Promise.all([
  page.waitForNavigation({
    timeout,
    ...waitOptions,
  }),
  page.click(selector),
]);

const ROOT = `http://localhost:${argv.PORT}/`;

// test.js
describe('/ (Home Page)', () => {
  let page;
  let aBlogUrl;
  beforeAll(async () => {
    page = await global.__BROWSER__.newPage();
  });

  beforeEach(async () => {
    await page.goto(ROOT);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to navigate to a blog', async () => {
    await clickAndWaitForNavigation(page, 'ul li:first-child a');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url.length).toBeGreaterThan(ROOT.length + 1);
    expect(text).not.toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to navigate to a blog and back to home', async () => {
    await clickAndWaitForNavigation(page, 'ul li:first-child a');
    await clickAndWaitForNavigation(page, 'a[href="/"]');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url).toEqual(ROOT);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to navigate directly from a blog to home', async () => {
    await clickAndWaitForNavigation(page, 'ul li:first-child a');
    const blogUrl = await page.url();

    // reload the page
    await page.goto(blogUrl);
    await clickAndWaitForNavigation(page, 'a[href="/"]');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url).toEqual(ROOT);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });
}, timeout);
