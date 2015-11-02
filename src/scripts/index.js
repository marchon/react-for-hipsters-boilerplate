// polyfills
System.import('es6-promise').then(promise => {
  promise.polyfill();
  System.import('whatwg-fetch');
});

// normalize.css
System.import('normalize.css');

// require your app here
System.import('debug-dude').then(dude => dude('service').warn('require your app entry point plz'));
