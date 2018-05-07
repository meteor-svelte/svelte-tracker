Package.describe({
  name: 'svelte:tracker',
  version: '3.0.0',
  summary: 'Tracker integration for Svelte',
  git: 'https://github.com/meteor-svelte/svelte-tracker.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.6');
  api.use('tracker');

  // Compile ECMAScript and Svelte in this package.
  api.use([
    'ecmascript',
    'svelte:compiler@2.5.0_1'
  ]);

  api.mainModule('with-tracker.js', [
    'client',
    'server'
  ], { lazy: true });
});
