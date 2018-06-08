const TIMEOUT = 2000;

const ROOT = `http://localhost:${process.env.PORT}/`;

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
  };
};

module.exports = scaffolding;
