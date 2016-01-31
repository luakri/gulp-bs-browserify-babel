/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('scripts', function(cb) {

    runSequence(['eslint', 'jscs'], cb);
});
