/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var url = require('url');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', function() {

    var DEFAULT_FILE = 'index.html';
    var ASSET_EXTENSIONS = ['js', 'css', 'png', 'jpg', 'jpeg', 'gif', 'ico'];

    browserSync.init({
        server: {
            baseDir: config.buildDir,
            middleware: function(req, res, next) {
                let fileHrefArray = url.parse(req.url).href.split('.');
                let fileExtension = fileHrefArray[fileHrefArray.length - 1];

                if (ASSET_EXTENSIONS.indexOf(fileExtension) === -1) {
                    req.url = '/' + DEFAULT_FILE;
                }

                return next();
            }
        },
        port: config.browserPort,
        ui: {
            port: config.UIPort
        },
        ghostMode: {
            links: false
        }
    });
});
