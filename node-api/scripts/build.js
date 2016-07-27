/**
 * Created by tkleingers on 7/22/16.
 */
var gulp = require('../../node_modules/gulp'),
    runSequence = require('../../node_modules/run-sequence');

require('./js');
require('./json');

// Build task:
gulp.task('build:node-api', function(cb){
    runSequence(['js:node-api', 'json:node-api'], cb);
});