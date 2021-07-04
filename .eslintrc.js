module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 10,
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    'react-native/react-native': true,
  },
  extends: '@react-native-community',
  plugins: ['react', 'react-native', 'import'],
  rules: {
    // 'global-require': 0,
    'no-console': 1,
    'object-shorthand': 1,
    'react-native/no-unused-styles': 1,
    'import/no-unresolved': [2, {commonjs: true, amd: true}],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
  globals: {
    fetch: false,
    navigator: false,
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
    window: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.android.js',
          '.ios.js',
          '.web.js',
          '.jsx',
          '.ts',
          '.d.ts',
          '.tsx',
        ],
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
};
