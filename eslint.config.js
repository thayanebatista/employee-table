import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import prettierPlugin from 'eslint-plugin-prettier';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Base settings
  {
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      globals: {
        browser: true,
        es2021: true,
      },
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          tsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      'react-hooks': reactHooksPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
  },

  // Recommended configurations
  {
    files: ['**/*.ts', '**/*.tsx'],
    plugins: {
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...typescriptPlugin.configs.recommended.rules,
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'functions', 'methods'],
        },
      ],
    },
  },

  // React and React Hooks configuration
  {
    files: ['**/*.jsx', '**/*.tsx'],
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
    },
  },

  // Prettier configuration
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          semi: true,
          trailingComma: 'all',
          tabWidth: 2,
          bracketSpacing: true,
          singleAttributePerLine: true,
          experimentalTernaries: true,
          plugins: ['prettier-plugin-tailwindcss'],
        },
      ],
    },
  },

  // Custom rules configuration
  {
    rules: {
      'import/prefer-default-export': 0,
      'class-methods-use-this': 0,
      'max-classes-per-file': 0,
      'import/no-unresolved': 0,
      'import/extensions': 0,
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      '@typescript-eslint/no-explicit-any': 'warn',
      'prefer-const': 'error',
      'lines-between-class-members': [
        'error',
        'always',
        { exceptAfterSingleLine: true },
      ],
      'no-await-in-loop': 0,
      'no-plusplus': 0,
      'no-shadow': 0,
      'no-extra-boolean-cast': 0,
      'object-curly-newline': 0,
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': ['error'],
      'max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
        },
      ],
      'no-use-before-define': 0,
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: ['state'],
        },
      ],
      'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
      'consistent-return': 0,
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'react/function-component-definition': [
        2,
        { namedComponents: 'arrow-function' },
      ],
      'react/no-array-index-key': 0,
      'react/jsx-props-no-spreading': 0,
      'no-return-assign': ['error', 'except-parens'],
      camelcase: 0,
      'jsx-a11y/click-events-have-key-events': 0,
      'jsx-a11y/no-static-element-interactions': 0,
      'react/require-default-props': 0,
      'react/no-unused-prop-types': 0,
      'jsx-a11y/label-has-associated-control': 0,
      'react/button-has-type': 0,
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },

  // Ignore patterns
  {
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '**/*.d.ts',
      '.next/',
      '.turbo/',
    ],
  },
];
