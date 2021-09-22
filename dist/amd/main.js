define(function (require) {
  // Load any app-specific modules
  // with a relative require call,
  // like:
  var exports = require('./bundle.amd');

  // Load library/vendor modules using
  // full IDs, like:
  console.log(exports.power());
});