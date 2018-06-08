const TIMEOUT = 2000;

const ROOT = `http://localhost:${process.env.PORT}/`;

const parseConfig = config => config.split("---")[1].split("\n").filter(line => line).reduce((obj, line) => {
  const parts = line.split(":").map(part => part.replace(/"/g, ''));

  return {
    ...obj,
    [parts[0].trim()]: parts.slice(1).join(":").trim(),
  };
}, {});

const scaffolding = () => {
  let page;

  const clickAndWaitForNavigation = async (selector, waitOptions = {}) => Promise.all([
    page.waitForNavigation({
      TIMEOUT,
      ...waitOptions,
    }),
    page.click(selector),
  ]);

  const getPage = async () => {
    if (!page) {
      page = await global.__BROWSER__.newPage();
    }
    return page;
  };

  return {
    TIMEOUT,
    ROOT,
    clickAndWaitForNavigation,
    getPage,
    parseConfig,
  };
};

module.exports = scaffolding;
