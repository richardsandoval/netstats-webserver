/**
 * Created by rsandoval on 22/10/15.
 */

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('default', function () {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            PORT: 8000

        },
        ignore : ['./node_modules/**']
    })
    .on('restart', function(){
        console.log('Restarting');
    });
});