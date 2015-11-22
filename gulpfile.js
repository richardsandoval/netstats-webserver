/**
 * Created by rsandoval on 09/11/15.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script: 'server.js',
        ext: 'js',
        env: {
            PORT: 8889
        },
        ignore: ['./node_modules/**']
    }).on('restart', function () {
        console.log('Restarting');
    });
});