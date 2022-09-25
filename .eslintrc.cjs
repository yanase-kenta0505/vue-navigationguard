/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: ['plugin:vue/vue3-essential', 'eslint:recommended', '@vue/eslint-config-prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    'vue/setup-compiler-macros': true, // defineProps’ is not defined.のエラー対応
    node: true // node の環境変数を追加
  }
};
