/*eslint-env node */
/*eslint strict: [2, "global"]*/

'use strict';

var gulp = require('gulp');
var Server = require('karma').Server;

gulp.task('unit', function(done) {

    new Server({
        configFile: __dirname + '/../karma.conf.js',
        singleRun: true
    }, done).start();
});
