import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import stylistic from '@stylistic/eslint-plugin';

export default function tataNextConfig(options = {}) {
  const {
    files = ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  } = options;

  return [
    ...nextVitals,
    ...nextTs,

    {
      files,
      plugins: {
        '@stylistic': stylistic,
      },

      rules: {
        // Stylistic
        '@stylistic/indent': ['error', 2, { SwitchCase: 1, ignoredNodes: ['TSTypeAliasDeclaration *', 'TSUnionType', 'TSIntersectionType'] }],

        // ESLint core
        'no-var': 'warn',
        eqeqeq: 'warn',
        'no-extra-semi': 'error',
        'no-debugger': 'off',
        'no-nested-ternary': 'off',
        'no-alert': 'off',
        'max-len': 'off',
        'no-use-before-define': 'off',
        'no-shadow': 'off',
        'no-param-reassign': 'off',
        'no-undef': 'off',
        'object-curly-newline': 'off',
        'consistent-return': 'off',
        'no-tabs': 'off',
        camelcase: 'off',
        'dot-notation': 'off',
        'no-redeclare': 'off',
        'prefer-destructuring': 'off',
        'no-unsafe-optional-chaining': 'off',
        'func-names': 'off',
        'no-multi-assign': 'off',
        'no-plusplus': 'off',
        'no-return-assign': 'off',

        // formatting
        quotes: ['error', 'single'],
        'arrow-parens': ['error', 'always'],
        semi: ['error', 'always'],
        'comma-spacing': ['error', { before: false, after: true }],

        // React
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [
          'error',
          { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
        ],
        'react/jsx-pascal-case': 'warn',
        'react/jsx-key': 'warn',
        'react/function-component-definition': [
          'error',
          {
            namedComponents: [
              'arrow-function',
              'function-declaration',
            ],
          },
        ],
        'react/react-in-jsx-scope': 'off',
        'react/prefer-stateless-function': 'off',
        'react/jsx-one-expression-per-line': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/button-has-type': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-array-index-key': 'off',
        'react/jsx-no-useless-fragment': 'off',
        'react/no-unused-prop-types': 'warn',
        'react/require-default-props': 'off',
        'react/no-unknown-property': 'off',

        // Hooks
        'react-hooks/exhaustive-deps': 'off',
        'react-hooks/rules-of-hooks': 'off',

        // Import
        'import/prefer-default-export': 'off',
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'import/order': 'off',
        'import/no-absolute-path': 'error',

        // A11y
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/control-has-associated-label': 'off',
        'jsx-a11y/label-has-associated-control': 'off',

        // TypeScript
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },

      settings: {
        'import/resolver': {
          node: {
            paths: ['src'],
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  ];
}