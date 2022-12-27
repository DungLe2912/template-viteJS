/* eslint-disable @typescript-eslint/no-var-requires */
// eslint-disable-next-line import/no-extraneous-dependencies
const { defaults } = require('jest-config')

// Sync object
const config = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  verbose: true,
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  moduleNameMapper: {
    '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$':
      '<rootDir>/test/assetMock.js',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/src/assets/'],
}
module.exports = config
