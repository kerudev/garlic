import { FlatCompat } from '@eslint/eslintrc';
import stylistic from '@stylistic/eslint-plugin';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  stylistic.configs['recommended'],

  ...compat.config({
    extends: [
      'next',
      'next/core-web-vitals',
      'next/typescript',
    ],
    rules: {
      'import/no-anonymous-default-export': 'off',

      '@stylistic/comma-dangle': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',

      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/object-curly-spacing': ['error', 'always'],
      '@stylistic/operator-linebreak': ['error', 'before', {
        overrides: {
          '=': 'after',
        }
      }],
    }
  }),
];
