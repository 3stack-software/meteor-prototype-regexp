Package.describe({
  name: '3stack:prototype-regexp',
  version: '0.0.1',
  summary: 'Helper functions to extend built-in type Regexp',
  git: 'https://github.com/3stack-software/meteor-prototype-regexp',
  documentation: 'README.md'
});

Package.onUse(function(api){
  api.addFiles('RegExp.prototype.js')
});
