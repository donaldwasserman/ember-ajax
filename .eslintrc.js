module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  plugins: [
    'ember',
    'prettier'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'prettier'
  ],
  env: {
    browser: true
  },
  rules: {
    'prettier/prettier': ['error', {
      singleQuote: true
    }]
  },
  overrides: [
    // tests
    {
      files: [
        'tests/**/*.js'
      ],
      excludedFiles: [
        'tests/dummy/**/*.js'
      ],
      rules: {
        'ember/avoid-leaking-state-in-ember-objects': 'off'
      }
    },
    // node files
    {
      files: [
        'index.js',
        'testem.js',
        'ember-cli-build.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'app/**',
        'addon/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};
