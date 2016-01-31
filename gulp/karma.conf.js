/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

module.exports = function(config) {

    config.set({
        basePath: '../app',
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],

        keepalive: true,
        autoWatch: true,
        singleRun: false,

        port: 9876,
        runnerPort: 9100,
        colors: true,
        captureTimeout: 5000,

        reporters: ['spec'],

        preprocessors: {
            '../test/unit/**/*.js': ['babel']
        },

        babelPreprocessor: {
            options: {
                presets: ['es2015'],
                sourceMap: 'inline'
            }
        },

        specReporter: {
            maxLogLines: 5, // limit number of lines logged per test
            suppressErrorSummary: true, // do not print error summary
            suppressFailed: false, // do not print information about failed tests
            suppressPassed: false, // do not print information about passed tests
            suppressSkipped: true // do not print information about skipped tests
        },

        files: [
            '../node_modules/babel-polyfill/dist/polyfill.js',
            '../test/unit/sample-spec.js'
        ]
    });
};
