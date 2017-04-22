var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var watch = require('gulp-watch');

gulp.task('sass', function () {
    gulp.src('./scss/main.scss')
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('bootstrap-sass', function () {
    gulp.src('scss/bootstrap-custom.scss')
        .pipe(plumber())
        .pipe(sass({
            errLogToConsole: true
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('default', function () {
    gulp.run('sass');
    gulp.run('bootstrap-sass');
    gulp.watch('scss/**', function (event) {
        gulp.run('sass');
        gulp.run('bootstrap-sass'); 
    })
});
