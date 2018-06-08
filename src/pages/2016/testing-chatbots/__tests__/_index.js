const {
  clickAndWaitForNavigation,
  ROOT,
  TIMEOUT,
  getPage,
} = require("scaffolding")();

describe('Testing Chatbots', async () => {
  beforeAll(async () => {
    page = await getPage();
  });

  beforeEach(async () => {
    await page.goto(`${ROOT}testing-chatbots-how-to-ensure-a-bot-says-the-right-thing-at-the-right-time/`);
  });

  it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);
    expect(text).toContain('Testing Chatbots: How to Ensure a Bot Says the Right Thing at the Right Time');
  });
}, TIMEOUT);

