// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build
const path = require('path');

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/web',
  setupFiles: [path.resolve(__dirname, './jest.setup.ts')],
};

module.exports = config;
