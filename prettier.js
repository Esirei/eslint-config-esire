module.exports = {
  extends: [
    'plugin:prettier/recommended',
  ],

  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        bracketSpacing: true,
        bracketSameLine: true,
        trailingComma: 'all',
        arrowParens: 'avoid',
        endOfLine: 'auto',
        printWidth: 100,
        tabWidth: 2,
      },
    ],
  },
};
