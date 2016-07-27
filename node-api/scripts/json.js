/**
 * Created by tkleingers on 7/24/16.
 */

var filelist = require('./gulp.filelist.js');

var gulp = require('gulp'),
    using = require('gulp-using'),
    del = require('del');

var bin = require('./build-params').bin;

gulp.task('json:node-api', function (cb) {
    runSequence('json:clean:node-api', 'json:compile:node-api', cb)
});

gulp.task('json:clean:node-api', function () {
    return del(filelist.json_clean, {force: true});
});

gulp.task('json:compile:node-api', function () {
    return gulp.src(filelist.json)
        .pipe(using())
        .pipe(gulp.dest(bin));
});