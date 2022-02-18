module.exports = {
  extends: [
    './prettier.js',
    'plugin:tailwindcss/recommended',
  ],

  rules: {
    'tailwindcss/classnames-order': 0,
    'tailwindcss/no-custom-classname': 0,
  },
};
