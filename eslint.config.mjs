import { FlatCompat } from "@eslint/eslintrc";
import stylistic from "@stylistic/eslint-plugin";
import { globalIgnores } from "eslint/config";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  globalIgnores([
    ".vscode/",
    ".next/",
    "node_module/",
    "**/dist/",
  ]),

  stylistic.configs["recommended"],

  ...compat.config({
    extends: [
      "next",
      "next/core-web-vitals",
      "next/typescript",
    ],
    rules: {
      "import/no-anonymous-default-export": "off",

      "@stylistic/comma-dangle": "off",
      "@stylistic/jsx-one-expression-per-line": "off",

      "@stylistic/indent": ["error", 2],
      "@stylistic/semi": ["error", "always"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/quote-props": ["error", "as-needed"],

      "@stylistic/object-curly-spacing": ["error", "always"],
      "@stylistic/operator-linebreak": ["error", "before", {
        overrides: {
          "=": "after",
        }
      }],

      "import/no-duplicates": "error",
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling", "index"]
          ],
          pathGroups: [
            {
              pattern: "@garlic/**",
              group: "internal"
            }
          ],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: {
            order: "asc",
            caseInsensitive: true
          },
          "newlines-between": "always"
        }
      ],
      "sort-imports": [
        "error",
        {
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        },
      ],
    }
  }),
];
