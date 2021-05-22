module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'react-hooks',
    'prettier'
  ],
  rules: {
    'import/order': 'error',
    'prefer-destructuring': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-restricted-syntax': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-filename-extension': [1, { 'extensions': ['.tsx'] }],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-unused-expressions': 'off',
    '@typescript-eslint/ban-types': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-empty': 'off',
    'camelcase': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    'consistent-return': 'off',
    'no-nested-ternary': 'off',
    'no-use-before-define': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'no-trailing-spaces': ['error'],
    'eol-last': ['error'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single', 'avoid-escape'],
    semi: ['error', 'always'],
    'react/display-name': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    'prettier/prettier': 'error',
    '@typescript-eslint/no-unused-vars': ['error', {
      'argsIgnorePattern': '_'
    }],
  },
  'settings': {
    'import/resolver': {
      'typescript': {}
    }
  }
};
