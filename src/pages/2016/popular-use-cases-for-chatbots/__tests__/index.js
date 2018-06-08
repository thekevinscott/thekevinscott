const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
} = require("scaffolding")();

describe('Popular Use Cases for Chatbots', async () => {
  beforeAll(async () => {
    page = await getPage();
  });

  beforeEach(async () => {
    await page.goto(`${ROOT}/popular-use-cases-for-chatbots/`);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Testing Chatbots: How to Ensure a Bot Says the Right Thing at the Right Time');
  });
}, TIMEOUT);

