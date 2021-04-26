module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.js', '.jsx'],
      },
    ],
    'global-require': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'react/jsx-one-expression-per-line': 'off',
    'prefer-destructuring': 'off',
    'react/prop-types': 'off',
    'arrow-body-style': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-useless-return': 'off',
    'no-use-before-define': 'off',
    'no-restricted-globals': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
};
