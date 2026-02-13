import js from "@eslint/js";
import { fixupPluginRules } from "@eslint/compat";

import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";

export default function tataReactBase(options = {}) {
  const {
    files = ["**/*.{js,jsx,ts,tsx,mjs,cjs}"],
  } = options;

  return [
    js.configs.recommended,

    {
      files,
      plugins: {
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
        import: fixupPluginRules(importPlugin),
        "jsx-a11y": fixupPluginRules(jsxA11y),
      },
      settings: {
        react: { version: "detect" },
        "import/resolver": {
          node: {
            paths: ["src"],
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
      },
      rules: {
        // ----------------
        // ESLint core
        // ----------------
        "no-var": "warn",
        "eqeqeq": "warn",
        "no-extra-semi": "error",
        "no-restricted-imports": "off",
        "no-empty": "off",
        "no-unused-vars": "off",
        "no-restricted-syntax": "off",
        "no-prototype-builtins": "off",
        "default-case": "off",
        "no-restricted-globals": "off",
        "no-mixed-operators": "off",
        "no-underscore-dangle": "off",
        "no-dupe-keys": "off",
        "arrow-body-style": "off",
        "linebreak-style": "off",
        "no-use-before-define": "off",
        "no-shadow": "off",
        "no-alert": "off",
        "object-curly-newline": "off",
        "consistent-return": "off",
        "no-tabs": "off",
        "camelcase": "off",
        "dot-notation": "off",
        "no-redeclare": "off",
        "prefer-destructuring": "off",
        "no-unsafe-optional-chaining": "off",
        "func-names": "off",
        "no-multi-assign": "off",
        "no-plusplus": "off",
        "no-return-assign": "off",
        "eol-last": "off",
        "quote-props": "off",
        "class-methods-use-this": "off",
        "no-debugger": "off",
        "no-undef": "off",
        "no-param-reassign": "off",
        "no-nested-ternary": "off",
        "max-len": "off",
            
        // formatting
        "quotes": ["error", "single"],
        "arrow-parens": ["error", "always"],
        "semi": ["error", "always"],
        "no-multiple-empty-lines": ["error", { max: 1 }],
        "object-curly-spacing": ["error", "always"],
        "jsx-quotes": ["error", "prefer-double"],
        "space-infix-ops": ["error", { int32Hint: false }],
        "comma-spacing": ["error", { before: false, after: true }],
            
        // ----------------
        // React
        // ----------------
        "react/prop-types": "off",
        "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
        "react/jsx-indent": "off",
        "react/jsx-indent-props": "off",
        "react/jsx-pascal-case": "warn",
        "react/jsx-key": "warn",
        "react/function-component-definition": ["error", { namedComponents: ["arrow-function", "function-declaration"] }],
        "react/react-in-jsx-scope": "off",
        "react/prefer-stateless-function": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/button-has-type": "off",
        "react/no-array-index-key": "off",
        "react/jsx-no-useless-fragment": "off",
        "react/no-unused-prop-types": "off",
        "react/self-closing-comp": "error",
        "react/display-name": "off",
        "react/no-danger": "off",
        "react/jsx-props-no-spreading": "off",
        "react/require-default-props": "off",
        "react/no-unknown-property": "off",
        "react/destructuring-assignment": "off",
        "react/sort-comp": "off",
        "react/jsx-no-constructed-context-values": "off",
        "react/no-unstable-nested-components": "off",
        "react/no-unescaped-entities": "off",
      
        // ----------------
        // React Hooks
        // ----------------
        "react-hooks/exhaustive-deps": "off",
        "react-hooks/rules-of-hooks": "off",
      
        // ----------------
        // Import
        // ----------------
        "import/prefer-default-export": "off",
        "import/no-absolute-path": "error",
        "import/no-named-as-default": "off",
        "import/no-unresolved": "off",
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/order": "off",
        "import/export": "off",
        "import/named": "off",
      
        // ----------------
        // JSX A11y
        // ----------------
        "jsx-a11y/alt-text": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "jsx-a11y/control-has-associated-label": "off",
        "jsx-a11y/label-has-associated-control": "off",
      }
    },
  ];
}