Package.describe({
  name: 'svelte:tracker',
  version: '2.0.0',
  summary: 'Tracker integration for Svelte',
  git: 'https://github.com/meteor-svelte/svelte-tracker.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');
  api.use('tracker');

  // Compile ECMAScript and Svelte in this package.
  api.use([
    'ecmascript',
    'svelte:compiler@1.3.1'
  ]);

  api.mainModule('with-tracker.js');
});
