/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');
var del = require('del');

gulp.task('clean', function(cb) {

    del([config.buildDir]).then(function() {
        cb();
    });
});
