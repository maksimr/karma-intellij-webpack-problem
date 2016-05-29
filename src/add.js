require('util');
require('http');
require('url');

var karmaLoad = function () {
  require('webpack');
  require('karma-jasmine');
  require('babel-core');
  require('jasmine-core');
  require('karma');
  require('karma-phantomjs-launcher');
  require('karma-webpack');
};

module.exports = function (a, b) {
  return a + b;
};
