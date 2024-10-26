module.exports = {
  collectionCoverage: true,
  collectionCoverageForm: ['src/**/*.{js, jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js']
}
