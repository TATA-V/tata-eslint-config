module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'no-var': 'warn',
    eqeqeq: 'warn',
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-pascal-case': 'warn',
    'react/jsx-key': 'warn',
    'no-debugger': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: ['arrow-function', 'function-declaration'] },
    ],
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    'no-console': 'warn',
    'react/button-has-type': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    semi: ['error', 'always'],
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unused-prop-types': 'warn',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-multiple-empty-lines': [ 'error', { max: 1 } ],
    'object-curly-spacing': ['error', 'always']
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
