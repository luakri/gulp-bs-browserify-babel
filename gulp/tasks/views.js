/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');
var browserSync = require('browser-sync');

// Views task
gulp.task('views', function() {

    // Process any other view files from app/views
    return gulp.src(config.views.src)
        .pipe(gulp.dest(config.views.dest))
        .pipe(browserSync.stream({once: true}));
});
