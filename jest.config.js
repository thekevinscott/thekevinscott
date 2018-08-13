module.exports = {
  globalSetup: "<rootDir>scripts/test/setup.js",
  globalTeardown: "<rootDir>scripts/test/teardown.js",

  setupTestFrameworkScriptFile: "<rootDir>scripts/test/test-setup.js",
  "testEnvironment": "<rootDir>scripts/test/puppeteer_environment.js",
  "moduleNameMapper": {
    "scaffolding": "<rootDir>/scripts/test/scaffolding.js",
    "lib": "<rootDir>/scripts/test/lib",
    "gatsby-config": "<rootDir>/gatsby-config.js"
  },
  "testPathIgnorePatterns": [
    "scripts/new_post/templates/(.*)",
    "/node_modules/"
  ],
  "preset": "jest-puppeteer",
  transform: {
    "\\.scss$": "identity-obj-proxy",
    "\\.md$": "jest-raw-loader",
    '^.+\\.jsx?$': '<rootDir>scripts/test/transformer.js',
    "^.+\\.tsx?$": "ts-jest"
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
  ],
};
