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

  settings: {
    react: {
      version: "detect",
    },
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
