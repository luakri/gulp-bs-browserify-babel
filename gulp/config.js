/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

module.exports = {

    browserPort: 9000,
    UIPort: 9001,

    sourceDir: './app/',
    buildDir: './dist/',

    scripts: {
        src: 'app/js/**/*.js',
        dest: 'dist/js'
    },

    lintScripts: {
        src: [
            'app/js/**/*.js',
            '!app/js/external/*.js',
            'gulp/**/*.js',
            'gulpfile.js',
            'test/unit/**/*.js'
        ]
    },

    views: {
        src: './app/*.html',
        dest: './dist/'
    },

    sass: {
        src: './app/sass/**/*.scss',
        dest: './dist/css',

        devOptions: {
            errLogToConsole: true,
            outputStyle: 'expanded'
        },

        prodOptions: {
            errLogToConsole: true,
            outputStyle: 'compressed'
        }
    },

    images: {
        src: 'app/images/**/*.{gif,jpeg,jpg,png,ico}',
        dest: 'dist/images'
    },

    browserify: {
        bundleName: 'main.js',
        prodSourcemap: false
    },

    testing: {
        bundleName: 'tests/main.js',
        prodSourcemap: false
    },

    gzip: {
        src: 'dist/**/*.{html,xml,json,css,js,js.map,css.map}',
        dest: 'dist/',
        options: {}
    }
};
