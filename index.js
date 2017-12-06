module.exports = {
  extends: [
    'sane',
    'plugin:ember/recommended'
  ],
  plugins: [
    'ember',
    'hbs'
  ],
  rules: {
    'ember/avoid-leaking-state-in-ember-objects': 0,
    'ember/closure-actions': 0,
    'ember/no-jquery': 2,
    'ember/no-observers': 2,
    'ember/no-side-effects': 2,
    'hbs/check-hbs-template-literals': 2
  }
};
