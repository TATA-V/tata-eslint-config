module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/errors',
    'plugin:import/warnings',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    'no-var': 'warn',
    eqeqeq: 'warn',
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'arrow-parens': ['warn', 'as-needed'],
    'no-unused-vars': ['off'],
    'import/prefer-default-export': ['off'],
    'react-hooks/exhaustive-deps': ['warn'],
    'react/jsx-pascal-case': 'warn',
    'react/jsx-key': 'warn',
    'no-debugger': 'off',
    'react/function-component-definition': [2, { namedComponents: ['arrow-function', 'function-declaration'] }],
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-nested-ternary': 0,
    'import/no-unresolved': 'off',
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
    'import/extensions': 'off',
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    'no-console': 'warn',
    'react/button-has-type': 'off',
  },
}