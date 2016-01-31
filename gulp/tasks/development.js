/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('dev', ['clean'], function(cb) {

    global.isProd = false;

    runSequence(['views', 'scripts', 'browserify', 'sass', 'copyimages'], 'watch', cb);
});
