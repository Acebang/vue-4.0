module.exports = {
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 6,//也就是ES6语法支持的意思
    "sourceType": "module",
    "ecmaFeatures": {
        "modules": true
    },
    "project": "./tsconfig.json"
  },
  "plugins": ["@typescript-eslint"],
  "rules": {
    "@typescript-eslint/restrict-plus-operands": "error",
    "no-var": "error",
    //这里就调用了@typescript-eslint/eslint-plugin的rule配置，更多配置可以去github上查文档
  }
}