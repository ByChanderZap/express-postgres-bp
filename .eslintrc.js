module.exports = {
  'env': {
    'browser': false,
    'node': true,
    'es2021': true,
  },
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 13,
    'sourceType': 'module'
  },
  'plugins': [
    '@typescript-eslint',
    'jest'
  ],
  'rules': {
    'indent': [
      'error',
      2,
      { 'SwitchCase': 1 }
    ],
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
    'max-len': ['error', {
      'code': 150,
      'tabWidth': 4,
    }],
    'sort-imports': ['error', {
      'ignoreCase': false,
      'ignoreDeclarationSort': true,
      'ignoreMemberSort': false,
      'memberSyntaxSortOrder': ['none', 'all', 'multiple', 'single'],
      'allowSeparatedGroups': true
    }],
    '@typescript-eslint/member-ordering': 'error',
    'arrow-parens': ['error', 'always', { 'requireForBlockBody': false }],
    'object-curly-spacing': ['error', 'always']
  }
}
