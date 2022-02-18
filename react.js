module.exports = {
  extends: [
    "./typescript.js",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "./tailwindcss.js",
  ],

  rules: {
    "react-hooks/exhaustive-deps": 2,
  },

  overrides: [
    {
      files: ["*.{ts,tsx}"],

      rules: {
        "react/prop-types": 0,
      },
    },
  ],
};
