const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
} = require("scaffolding")();

describe('/ (Home Page)', () => {
  beforeAll(async () => {
    page = await getPage();
  });

  beforeEach(async () => {
    await page.goto(`${ROOT}`);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to navigate to a blog', async () => {
    await clickAndWaitForNavigation('ul li:first-child a');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url.length).toBeGreaterThan(ROOT.length + 1);
    expect(text).not.toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to navigate to a blog and back to home', async () => {
    await clickAndWaitForNavigation('ul li:first-child a');
    await clickAndWaitForNavigation('a[href="/"]');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url).toEqual(ROOT);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to navigate directly from a blog to home', async () => {
    await clickAndWaitForNavigation('ul li:first-child a');
    const blogUrl = await page.url();

    // reload the page
    await page.goto(blogUrl);
    await clickAndWaitForNavigation('a[href="/"]');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url).toEqual(ROOT);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });

  it('should be able to handle badly nested slahes', async () => {
    await page.goto(`${ROOT}////`);
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Artificial Intelligence, Design, and the Web');
  });
}, TIMEOUT);
