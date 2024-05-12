module.exports = {
  'env': {
    'node': true,
    'commonjs': true,
    'es2021': true
  },
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 'latest'
  },
  plugins: [
    '@stylistic/js'
  ],
  'rules': {
    '@stylistic/js/indent': ['error', 2],
    '@stylistic/js/no-trailing-spaces': 'error',
    '@stylistic/js/object-curly-spacing': ['error', 'never'],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ],
    'eqeqeq': 'error',
    'no-console': 0
  }
}
