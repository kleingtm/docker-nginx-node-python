/**
 * Created by tkleingers on 7/22/16.
 */

var shell = require('shelljs');
var gulp = require('gulp');

gulp.task('dockerize', function(){

    shell.exec('eval $(docker-machine env default)' +
        ' && docker rm -f $(docker ps -a -q)' +
        ' && echo "\r\n ***"' +
        ' && docker-machine ls' +
        ' && echo "***"' +
        ' && docker-compose build --force-rm' +
        ' && docker-compose up', {async: true});

    process.on('SIGINT', function(){});
});