/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['browserSync'], function() {

    gulp.watch(config.scripts.src, ['eslint', 'jscs']);
    gulp.watch(config.views.src, ['views']);
    gulp.watch(config.sass.src, ['sass']);
});
