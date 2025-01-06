import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'lib',
  stylistic: {
    semi: true,
    quotes: 'single',
    indent: 2,
  },
  rules: {
    'style/quotes': ['error', 'single'],
  },
});
