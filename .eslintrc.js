"root": true,
"env": {
  "node": true
},
"plugins": ["cypress", "prettier"],
"extends": ["plugin:cypress/recommended", "prettier"],
"rules": {
  "cypress/no-assigning-return-values": "warn",
  "cypress/no-unnecessary-waiting": "warn",
  "cypress/assertion-before-screenshot": "warn",
  "cypress/no-force": "warn",
  "cypress/no-async-tests": "warn",
  "prettier/prettier": "warn",
  "no-var": "warn"
  }
