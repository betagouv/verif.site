process.env.NODE_ENV = 'test'

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;

// Disable webpack-specific features for tests since
// Mocha doesn't know what to do with them.
void ['.css', '.scss', '.png', '.jpg'].forEach(ext => {
  require.extensions[ext] = () => null
})

require('babel-register')();
