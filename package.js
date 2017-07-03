Package.describe({
  name: 'appworkshop:autoform-materialize-helptext',
  version: '1.1.0',
  // Brief, one-line summary of the package.
  summary: 'Adds help text to mozfet:autoform-materialize',
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
    'aldeed:autoform@6.2.0',
    'mozfet:autoform-materialize@2.0.16',
    'aldeed:template-extension@4.0.0'
  ], ['client']);
  api.addFiles([
    'afFormGroup_materialize_withHelp.html',
    'afFormGroup_materialize_withHelp.js'
  ], ['client']);
});

