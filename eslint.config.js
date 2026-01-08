import importPlugin from "eslint-plugin-import";
import globals from "globals";

export default [
  // Ignore common build/output folders
  {
    ignores: ["node_modules/**", "dist/**", "build/**", "js/vendor/**"],
  },
  // Base rules for all JS files
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js"],
        },
      },
    },
    rules: {
      // General hygiene
      "no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", ignoreRestSiblings: true },
      ],
      "no-undef": "error",

      // Identify unused exports/modules
      "import/no-unused-modules": [
        "error",
        {
          unusedExports: true,
          missingExports: true,
          ignoreExports: [
            // Test harness and tests
            "server/**",
            "testies/**",
            // Entry points / side-effect modules (adjust as needed)
            "js/three-sorting/actions/init*.js",
            "js/three-sorting/actions/render.js",
          ],
        },
      ],
    },
  },
  // Tests: relax some rules and ensure Node globals
  {
    files: ["**/*.test.*", "testies/**"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "import/no-unused-modules": "off",
    },
  },
];
