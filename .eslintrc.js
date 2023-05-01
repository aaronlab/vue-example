const { off } = require('process')

module.exports = {
  parser: 'vue-eslint-parser',
  extends: ['standard', 'plugin:vue/vue3-recommended'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    extends: ['plugin:@typescript-eslint/eslint-recommended']
  },
  rules: {
    'func-call-spacing': 'off',
    'no-new': 'off',
    'vue/no-v-html': 'off',
    'vue/valid-v-slot': [
      'error',
      {
        allowModifiers: true
      }
    ],
    'no-empty': 'warn',
    'no-unused-vars': 'warn',
    'space-before-blocks': 'warn',
    'keyword-spacing': 'warn',
    'no-multiple-empty-lines': 'warn'
  }
}
