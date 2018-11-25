module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-use-v-if-with-v-for': 1,
    'vue/no-v-html': 1,
    'vue/prop-name-casing': 2,
    'vue/script-indent': 2
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  'extends': [
    'plugin:vue/recommended',
    '@vue/prettier'
  ]
};
