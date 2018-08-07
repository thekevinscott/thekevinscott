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

describe('/ (Home Page)', () => {
  let page, head;
  beforeAll(async () => {
    page = await getPage();
    head = getHeadSelectorFn(page);
  });

  beforeEach(async () => {
    await page.goto(`${ROOT}`);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain(siteMetadata.title);
  });

  it('should be able to navigate to a blog', async () => {
    await clickAndWaitForNavigation('#blogPosts > div:first-child');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url.length).toBeGreaterThan(ROOT.length + 1);
    expect(text).not.toContain(siteMetadata.title);
  });

  it('should be able to navigate to a blog and back to home', async () => {
    await clickAndWaitForNavigation('#blogPosts > div:first-child');
    await clickAndWaitForNavigation('a[href="/"]');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url).toEqual(ROOT);
    expect(text).toContain(siteMetadata.title);
  });

  it('should be able to navigate directly from a blog to home', async () => {
    await clickAndWaitForNavigation('#blogPosts > div:first-child');
    const blogUrl = await page.url();

    // reload the page
    await page.goto(blogUrl);
    await clickAndWaitForNavigation('a[href="/"]');

    const url = await page.url();
    const text = await page.evaluate(() => document.body.textContent);
    expect(url).toEqual(ROOT);
    expect(text).toContain(siteMetadata.title);
  });

  it('should be able to handle badly nested slashes', async () => {
    await page.goto(`${ROOT}////`);
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain(siteMetadata.title);
  });

  it('should display correct meta tags', async () => {
    await page.goto(`${ROOT}`);

    expect(await head('title')).toEqual(siteMetadata.title);
    expect(await head('meta[name="description"]')).toEqual(siteMetadata.description);
    expect(await head('meta[name="keywords"]')).toEqual(siteMetadata.keywords);
    expect(await head('meta[name="author"]')).toEqual(siteMetadata.author);
    expect(await head('link[rel="canonical"]', 'href')).toEqual(siteMetadata.url);

    expect(await head('meta[property="og:title"]')).toEqual(siteMetadata.title);
    expect(await head('meta[property="twitter:title"]')).toEqual(siteMetadata.title);
    expect(await head('meta[property="og:description"]')).toEqual(siteMetadata.description);
    expect(await head('meta[property="twitter:description"]')).toEqual(siteMetadata.description);
    expect(await head('meta[property="og:type"]')).toEqual('website');
    expect(await head('meta[property="twitter:type"]')).toEqual('website');
  });
}, TIMEOUT);
