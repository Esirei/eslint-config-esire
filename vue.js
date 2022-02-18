module.exports = {
  env: {
    'vue/setup-compiler-macros': true
  },

  extends: [
    './typescript.js',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    './tailwindcss.js',
  ],

  rules: {
    'vue/multi-word-component-names': 0,
    'vue/require-default-prop': 0,
    'vue/require-prop-types': 0,
  },
};
