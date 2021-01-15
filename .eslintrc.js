module.exports = {
  root: true,
  env: {
    node: true,
  },
  globals: {
    $: true,
    wx: true,
    dsBridge: true,
    EngineWrapper: true,
    dsbAdapter: true,
    require: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-irregular-whitespace': 0,
    "global-require": 0,
    'linebreak-style': 0,
    "arrow-body-style":0,
    'arrow-parens': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'vue/no-use-v-if-with-v-for': 0,
    'no-mixed-spaces-and-tabs': 0,
    'no-trailing-spaces':0,
    'max-len':0,
    'eol-last': 0,
    'semi': [0], // 不检测分号
    'comma-dangle': 0,
    'vue/valid-v-on': 0,
    'indent':0,
    'spaced-comment':0,
    'no-unused-vars':0,
    'no-multiple-empty-lines':0
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
