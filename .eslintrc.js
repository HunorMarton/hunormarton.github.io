module.exports = {
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  plugins: ['react', 'import', 'jsx-a11y', 'prettier'],
  rules: {
    'arrow-body-style': [2, 'as-needed'],
    'import/order': [
      2,
      {
        groups: ['builtin', 'external', 'internal', 'parent'],
        'newlines-between': 'ignore' // TODO: always-and-inside-groups when released
      }
    ],
    'import/no-extraneous-dependencies': [
      2,
      {
        devDependencies: ['**/*.test.js', '**/*.stories.js']
      }
    ],

    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'import/prefer-default-export': 0,
    'jsx-a11y/img-has-alt': 0,
    'jsx-a11y/aria-props': 2,
    'jsx-a11y/heading-has-content': 0,
    'jsx-a11y/mouse-events-have-key-events': 2,
    'jsx-a11y/role-has-required-aria-props': 2,
    'jsx-a11y/role-supports-aria-props': 2,
    'class-methods-use-this': 0,
    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-no-target-blank': 0,
    'react/require-extension': 0,
    'react/self-closing-comp': 0,
    'require-yield': 0,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          'type-annotations',
          'lifecycle',
          'everything-else',
          'render'
        ]
      }
    ],

    // enable one day
    'react/require-default-props': 0,
    'max-len': 0,
    'newline-per-chained-call': 0,
    'no-use-before-define': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/anchor-has-content': 0
  }
}
