Package.describe({
  name: 'svelte:tracker',
  version: '0.0.1',
  summary: 'Tracker integration for Svelte',
  git: 'https://github.com/meteor-svelte/svelte-tracker.git'
});

Package.onUse(function (api) {
  api.versionsFrom('1.4.2.3');

  // Compile ECMAScript and Svelte in this package
  api.use('ecmascript');
  api.use('svelte:compiler');

  api.mainModule('with-tracker.js');
});
