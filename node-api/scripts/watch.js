/**
 * Created by tkleingers on 7/23/16.
 */

var filelist = require('./gulp.filelist.js');

var gulp = require('gulp');

gulp.task('watch:node-api', function(){
    gulp.watch(filelist.js, ['js:node-api']);
});