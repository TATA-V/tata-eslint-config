module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-var': 'warn',
    eqeqeq: 'warn',
    'no-extra-semi': 'error',
    'no-unused-vars': 'off',
    'import/prefer-default-export': 'off',
    'no-debugger': 'off',
    'no-nested-ternary': 0,
    'import/no-unresolved': 'off',
    'linebreak-style': 0,
    'import/extensions': 'off',
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    'no-console': 'warn',
    'no-alert': 'off',
    'max-len': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'object-curly-newline': 'off',
    semi: ['error', 'always'],
    'jsx-a11y/control-has-associated-label': 'off',
    'consistent-return': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'import/order': 'off',
    'no-tabs': 'off',
    camelcase: 'off',
    'dot-notation': 'off',
    'no-redeclare:': 'off',
    'prefer-destructuring': 'off',
    'no-unsafe-optional-chaining': 'off',
    'vue/html-indent': ['error', 2],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'always',
        normal: 'never',
        component: 'always',
      },
      svg: 'always',
      math: 'always',
    }],
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-v-html': 'off',
    'vue/no-dupe-keys': 'error',
    'vue/no-duplicate-attributes': 'error',
    'vue/valid-v-bind': 'error',
    'vue/valid-v-if': 'error',
    'vue/valid-v-for': 'warn',
    'vue/valid-v-html': 'error',
    'vue/valid-v-model': 'error',
    'vue/valid-v-on': 'warn',
  },
};
