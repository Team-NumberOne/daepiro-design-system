const { getJestConfig } = require('@storybook/test-runner');

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
module.exports = {
  // The default configuration comes from @storybook/test-runner
  ...getJestConfig(),
  /** Add your own overrides below
   * @see https://jestjs.io/docs/configuration
   * @see https://github.com/storybookjs/test-runner#configuration
   */
  testMatch: ['**/*.stories.@(js|jsx|ts|tsx)'],
  testTimeout: 15000,
};

