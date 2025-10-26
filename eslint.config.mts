import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import playwright from 'eslint-plugin-playwright';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  // JS + TS files
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts}'],
    languageOptions: {
      parser: tseslint.parser, // ✅ TypeScript parser object
      globals: { ...globals.browser, ...globals.node },
    },
    plugins: { js, '@typescript-eslint': tseslint.plugin },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      playwright.configs['flat/recommended'], // ✅ flat config, not "plugin:..."
    ],
    rules: {
        // ✅ allow CommonJS require() statements
      '@typescript-eslint/no-var-requires': 'off',
      // ✅ allow mixing import/require (useful for report.js)
      '@typescript-eslint/no-require-imports': 'off',
      'import/no-commonjs': 'off',

      // Allow top-level await in flat configs or test utilities
      'no-await-in-loop': 'off',
      // allow stand-alone expect() in steps
      'playwright/no-standalone-expect': 'off',
      // ❌ forbid page.pause()
      'no-restricted-syntax': [
        'error',
        {
          selector:
            "CallExpression[callee.object.name='page'][callee.property.name='pause']",
          message: '❌ Do not use page.pause() in tests.',
        },
      ],
    },
  },

  // JSON files
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
    ignores: ['**/node_modules/**'],
  },
]);
