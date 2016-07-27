/**
 * Created by tkleingers on 7/22/16.
 */
var gulp = require('gulp'),
    runSequence = require('run-sequence');

require('require-dir')('./scripts/');
require('require-dir')('./node-api/scripts/');
//require('require-dir')('./app/scripts/');

gulp.task('dev', function(cb){
    runSequence('build', 'watch', cb);
});

gulp.task('build', function(cb){
    return runSequence(['build:node-api'/*, 'build:app'*/], 'dockerize', cb);
});

gulp.task('watch', function(){
    runSequence(['watch:node-api']);
});