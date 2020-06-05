module.exports = {
  root: true,
  env: {
    node: true,
    webextensions: true
  },
  extends: [
    'plugin:vue/strongly-recommended',
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'quotes': [
      2,
      'single',
      {
        'avoidEscape': true,
        'allowTemplateLiterals': true
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
