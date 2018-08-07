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

describe('Services based architecture', async () => {
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

  it('should position the title correctly', async () => {
    const rect = await getTitlePosition(page, config);
    expect(rect.left).toBeGreaterThan(300);
    expect(rect.top).toBeGreaterThan(80);
  });
}, TIMEOUT);

