/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');

// Views task
gulp.task('copyimages', function() {

    return gulp.src(config.images.src)
        .pipe(gulp.dest(config.images.dest));
});
