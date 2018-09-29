module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ["plugin:vue/essential", "@vue/prettier"],

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/no-use-v-if-with-v-for': 'warning',
    'vue/no-v-html': 'warning',
    'vue/prop-name-casing': 'warning',
    'vue/script-indent': 'warning'
  },

  parserOptions: {
    parser: 'babel-eslint'
  },

  'extends': [
    'plugin:vue/essential',
    '@vue/prettier'
  ]
};
