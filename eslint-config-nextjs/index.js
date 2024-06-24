module.exports = {
  env: { browser: true, es2020: true, node: true },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  rules: {
    'no-var': 'warn',
    'eqeqeq': 'warn',
    'react/prop-types': 0,
    'no-extra-semi': 'error',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'import/prefer-default-export': 'off',
    'react-hooks/exhaustive-deps': 'off',
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
    'quotes': ['error', 'single'],
    'indent': ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    'no-console': 'warn',
    'react/button-has-type': 'off',
    'no-alert': 'off',
    'max-len': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-array-index-key': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'object-curly-newline': 'off',
    'semi': ['error', 'always'],
    'react/jsx-no-useless-fragment': 'off',
    'react/no-unused-prop-types': 'warn',
    'jsx-a11y/control-has-associated-label': 'off',
    'react/require-default-props': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': 'off',
    'no-tabs': 'off',
    'camelcase': 'off',
    'dot-notation': 'off',
    'no-redeclare:': 'off',
    'prefer-destructuring': 'off',
    'no-unsafe-optional-chaining': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'import/no-absolute-path': 'error',
    'func-names': 'off',
    'react/no-unknown-property': 'off',
    'no-multi-assign': 'off',
    '@typescript-eslint/no-use-before-define': 'off', 
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'react-hooks/rules-of-hooks': 'off',
    'overrides': [
      {
        'files': ['*.ts', '*.tsx'],
        'rules': {
          '@typescript-eslint/no-unused-vars': 'warn'
        }
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        'patterns': ['@/*']
      }
    ]
  },
  settings: {
    'import/resolver': {
      'node': {
        'paths': ['src'],
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  }
}