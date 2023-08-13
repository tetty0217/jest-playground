module.exports = {
  extends: ["eslint:recommended", "next", "next/core-web-vitals", "prettier"],
  env: {
    es6: true,
    browser: true,
  },
  rules: {
    "sort-imports": "off",
    "import/order": ["error", { alphabetize: { order: "asc" } }],
    "no-unused-vars": "off",
  },
  overrides: [
    {
      files: ["src/**/__tests__/*.test.ts"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "jest/consistent-test-it": ["error", { fn: "test" }],
        "jest/require-top-level-describe": ["error"],
      },
    },
  ],
};
