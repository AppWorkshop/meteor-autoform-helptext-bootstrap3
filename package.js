Package.describe({
  name: 'appworkshop:autoform-helptext-bootstrap3',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Adds help text to aldeed:autoform for bootstrap3 forms',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/AppWorkshop/meteor-autoform-helptext-bootstrap3.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6.0.1');
  api.use('ecmascript');
  api.use([
    'templating@1.3.2',
    'aldeed:autoform@6.2.0',
    'aldeed:template-extension@4.0.0'
  ], ['client']);
  api.addFiles([
    'afFormGroup_withHelp.html',
    'afFormGroup_withHelp.js'
  ], ['client']);
});

