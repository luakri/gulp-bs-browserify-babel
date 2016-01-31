/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');
var jscs = require('gulp-jscs');

gulp.task('jscs', function() {

    return gulp.src(config.lintScripts.src)
        .pipe(jscs())
        .pipe(jscs.reporter());
});
