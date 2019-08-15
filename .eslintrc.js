module.exports = {
  parser: 'babel-eslint',
  extends: [
    'plugin:unicorn/recommended',
    'plugin:prettier/recommended',
    'prettier/babel',
    'prettier/react',
    'prettier/unicorn',
  ],
  rules: {
    'unicorn/prevent-abbreviations': 'warn',
  },
}
