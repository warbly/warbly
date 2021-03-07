const error = 2;

module.exports = {
  root: true,
  env: {
    'browser': true,
    'es2021': true,
    'jest/globals': true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: ['airbnb', 'prettier'],
  plugins: ['jest', 'prettier'],
  rules: {
    'prettier/prettier': error,
  },
};
