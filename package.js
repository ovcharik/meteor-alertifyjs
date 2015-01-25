Package.describe({
  name: 'ovcharik:alertifyjs',
  summary: 'A javascript framework for developing pretty browser dialogs and notifications.',
  version: '1.1.0',
  git: 'https://github.com/ovcharik/meteor-alertifyjs'
});

Package.onUse(function(api) {
  api.addFiles('AlertifyJS/build/css/alertify.css', 'client');
  api.addFiles('AlertifyJS/build/css/themes/default.css', 'client');

  api.addFiles('AlertifyJS/build/alertify.js', 'client');
  api.addFiles('export.js', 'client');

  api.export('alertify', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest', 'client');
  api.use('ovcharik:alertifyjs', 'client');
  api.addFiles('ovcharik:alertifyjs-tests.js', 'client');
});
