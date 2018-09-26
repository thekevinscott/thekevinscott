const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
  parseConfig,
} = require("scaffolding")();

describe('Laugh Tracks 1', async () => {
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
    const pageImage = config.image.split(".");
    const image = `^${siteMetadata.url}/static/${pageImage.slice(0, -1).join(".")}(.*).${pageImage.slice(-1)[0]}`;

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

    expect(await head('meta[property="og:image"]')).toEqual(expect.stringMatching(image));
    expect(await head('meta[property="twitter:image"]')).toEqual(expect.stringMatching(image));
  });
}, TIMEOUT);
