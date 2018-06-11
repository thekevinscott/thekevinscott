const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
  parseConfig,
} = require("scaffolding")();

const {
  getTitleText,
  getTitlePosition,
  dimensions,
} = require("lib");

describe('Popular Use Cases for Chatbots', async () => {
  let page, config;
  beforeAll(async () => {
    page = await getPage();
    config = parseConfig(require("../index.md"));
    page.setViewport(dimensions.macbook);
  });

  beforeEach(async () => {
    const url = `${ROOT}${config.path.substring(1)}`;
    await page.goto(url);
  });

  it('should load without error', async () => {
    const text = await getTitleText(page);
    expect(text).toContain(config.title);
  });

  it('should position the title correctly', async () => {
    const rect = await getTitlePosition(page, config);
    expect(rect.left).toBeGreaterThan(300);
    expect(rect.top).toBeGreaterThan(100);
  });
}, TIMEOUT);
