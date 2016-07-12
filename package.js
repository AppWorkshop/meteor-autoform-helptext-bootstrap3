Package.describe({
  name: 'appworkshop:autoform-materialize-helptext',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Adds help text to gildaspk:autoform-materialize',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/appworkshop/meteor-autoform-materialize-helptext',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('1.3.4.4');
  api.use('ecmascript');
  api.use([
    'templating',
    'aldeed:simple-schema',
    'aldeed:autoform',
    'gildaspk:autoform-materialize',
    'aldeed:template-extension'
  ], ['client']);
  api.addFiles([
    'afFormGroup_materialize_withHelp.html',
    'afFormGroup_materialize_withHelp.js'
  ], ['client']);
});

