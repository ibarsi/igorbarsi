const babelParser = require('@babel/eslint-parser');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', '.cache/**', 'public/**'],
  },
  {
    files: ['**/*.{js,jsx,cjs}'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        requireConfigFile: false,
        sourceType: 'module',
        babelOptions: {
          presets: ['gatsby'],
        },
      },
      globals: {
        __dirname: 'readonly',
        console: 'readonly',
        document: 'readonly',
        exports: 'readonly',
        module: 'readonly',
        navigator: 'readonly',
        process: 'readonly',
        require: 'readonly',
        window: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...prettierConfig.rules,
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
    },
  },
];
