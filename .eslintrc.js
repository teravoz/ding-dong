module.exports = {
  "env": {
    "es6": true,
    "node": true,
    "mocha": true
  },
  "parserOptions": {
    "ecmaVersion": 10,
  },
  "extends": "eslint:recommended",
  "rules": {
    "indent": [
      "error",
      2, { "SwitchCase": 1 }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "error",
      "always"
    ],
    "prefer-const": ["error", {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "comma-dangle": ["error", "never"],
    "strict": ["error", "global"],
    "no-console": ["error", { allow: ["dir", "error", "log", "warn"] }],
    "no-constant-condition": ["error", { "checkLoops": false }],
    "no-unused-vars": ["error", { "args": "none" }],
    "no-case-declarations": "off",
    "arrow-parens": ["error", "always"],
    "padded-blocks": ["error", "never"],
    "prefer-const": "error"
  }
};
