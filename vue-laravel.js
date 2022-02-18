module.exports = {
  plugins: ['import'],

  extends: [
    './vue.js',
  ],

  settings: {
    'import/resolver': {
      alias: {
        map: ['@', './resources/js'],
        extensions: ['.vue'],
      },
    },
  },

  rules: {
    'import/extensions': [2, { vue: 'always' }],
  },
};
