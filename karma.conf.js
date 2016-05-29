module.exports = function(config) {
    config.set({
        frameworks: ['jasmine'],
        files: [{
            pattern: 'test/webpack-tests.bundle.js',
            watched: false
        }],
        preprocessors: {
            'test/webpack-tests.bundle.js': ['webpack']
        },
        webpack: require('./webpack.config'),
        reporters: ['progress'],
        autoWatch: true,
        browsers: ['PhantomJS']
    });
};
