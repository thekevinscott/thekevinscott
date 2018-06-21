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
    const text = await page.evaluate(() => document.querySelector('h1').textContent);
    expect(text).toContain(config.title);
  });

  it('should display correct meta tags', async () => {
    const title = config.title || siteMetadata.title;
    const description = config.description || siteMetadata.description;
    const keywords = config.tags ? config.tags.join(", ") : siteMetadata.keywords;
    const url = `${siteMetadata.url}${config.path}`;
    const image = 'foo.png';

    expect(await head('title')).toEqual(title);
    expect(await head('meta[property="og:title"]')).toEqual(title);
    expect(await head('meta[property="twitter:title"]')).toEqual(title);

    expect(await head('meta[name="description"]')).toEqual(description);
    expect(await head('meta[property="og:description"]')).toEqual(description);
    expect(await head('meta[property="twitter:description"]')).toEqual(description);

    expect(await head('meta[property="og:type"]')).toEqual('article');
    expect(await head('meta[property="twitter:type"]')).toEqual('article');

    expect(await head('link[rel="canonical"]', 'href')).toEqual(url);
    expect(await head('meta[property="og:url"]')).toEqual(url);
    expect(await head('meta[property="twitter:url"]')).toEqual(url);

    expect(await head('meta[name="keywords"]')).toEqual(keywords);
    expect(await head('meta[name="author"]')).toEqual(siteMetadata.author);

    expect(await head('meta[property="og:image"]')).toEqual(image);
    expect(await head('meta[property="twitter:image"]')).toEqual(image);
  });
}, TIMEOUT);
