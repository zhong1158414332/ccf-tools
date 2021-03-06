module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react'],
  parser: 'babel-eslint',
  rules: {
    'linebreak-style': 0,
    'no-restricted-syntax': 0,
    'keyword-spacing': 0,
    'no-console': 0,
    'no-use-before-define': ['error', { functions: false, classes: true }],
    'no-param-reassign': 0,
    'arrow-parens': [0, 'always'],
    'react/jsx-props-no-spreading': 0,
    'react/forbid-prop-types': 0,
  },
};
