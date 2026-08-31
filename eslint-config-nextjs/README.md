`eslint-config-next` is included by `@tata-v/eslint-config-nextjs` and does not need to be installed separately.

### Install

```bash
pnpm add -D @tata-v/eslint-config-nextjs@latest
```

### eslint.config.mjs

```mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import tataNextConfig from '@tata-v/eslint-config-nextjs';

export default defineConfig([
  ...tataNextConfig(),

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),

  // Project-specific overrides (optional)
  {
    rules: {
      '@next/next/no-img-element': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
]);
```