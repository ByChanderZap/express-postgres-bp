module.exports = {
  verbose: true,
  collectCoverageFrom: [
    'src/**/*.{js,ts}'
  ],
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname'
  ],
  transform: {
    '\\.[jt]sx?$': 'babel-jest'
  }
}
  