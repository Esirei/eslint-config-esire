module.exports = {
  extends: [
    './index.js',
  ],

  overrides: [
    {
      files: ['*.{ts,tsx}'],

      parser: '@typescript-eslint/parser',

      parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
      },

      plugins: ['@typescript-eslint'],

      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-typescript/base',
      ],

      rules: {
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
        'no-unused-vars': 0,
      },
    },
  ],
};
