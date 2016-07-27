/**
 * Created by tkleingers on 7/22/16.
 */

var filelist = require('./gulp.filelist.js');

var gulp = require('gulp'),
    path = require('path'),
    babel = require('gulp-babel'),
    using = require('gulp-using'),
    rename = require("gulp-rename");
    lint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    ngAnnotate = require('gulp-ng-annotate'),
    runSequence = require('run-sequence'),
    concat = require('gulp-concat'),
    flatten = require('gulp-flatten'),
    del = require('del');

var bin = require('./build-params').bin;

gulp.task('js:node-api', function(cb) {
    runSequence(['js:clean:node-api', 'js:lint:node-api'], 'js:compile:node-api', cb)
});

gulp.task('js:clean:node-api', function () {
    return del(filelist.js_clean, {force: true});
});

gulp.task('js:lint:node-api', function () {
    return gulp.src(filelist.js)
        .pipe(using())
        .pipe(lint())
        .pipe(lint.reporter('default'));
});

gulp.task('js:compile:node-api', function(){
    return gulp.src(filelist.js)
        .pipe(using())
        .pipe(sourcemaps.init())
        .pipe(ngAnnotate())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('node-api.js'))
        .pipe(uglify())
        // .pipe(rename(function (path) {
        //     path.basename += "_compiled";
        // }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest(bin));
});