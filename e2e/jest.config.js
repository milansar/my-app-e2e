module.exports = {
  preset: 'ts-jest',
  maxWorkers: 1,
  testTimeout: 120000,
  verbose: true,
  rootDir: '..',
  testMatch: ['<rootDir>/e2e/**/*.e2e.ts'],
  reporters: ['detox/runners/jest/reporter'],
  globalSetup: 'detox/runners/jest/globalSetup',
  globalTeardown: 'detox/runners/jest/globalTeardown',
  testEnvironment: 'detox/runners/jest/testEnvironment',
}
