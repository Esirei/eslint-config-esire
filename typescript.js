module.exports = {
  extends: ["./index.js"],

  overrides: [
    {
      files: ["*.{ts,tsx}"],

      parser: "@typescript-eslint/parser",

      parserOptions: {
        project: "./tsconfig.json",
      },

      plugins: ["@typescript-eslint"],

      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
      ],

      rules: {
        'no-unused-vars': 0,
        '@typescript-eslint/no-non-null-assertion': 0,
        '@typescript-eslint/no-unused-vars': [2, { argsIgnorePattern: '^_' }],
      },
    },
  ],
};
