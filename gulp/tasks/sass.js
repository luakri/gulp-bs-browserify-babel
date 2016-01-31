/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var config = require('../config');
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var gulpif = require('gulp-if');

gulp.task('sass', function() {

    var sassOptions = (global.isProd) ? config.sass.prodOptions : config.sass.devOptions;

    return gulp
        // Find all `.scss` files from the `stylesheets/` folder
        .src(config.sass.src)
        .pipe(sourcemaps.init())
        // Run Sass on those files
        .pipe(sass(sassOptions).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        // Write the resulting CSS in the output folder
        .pipe(gulp.dest(config.sass.dest))
        .pipe(gulpif(!global.isProd, browserSync.stream({once: true})));
});
