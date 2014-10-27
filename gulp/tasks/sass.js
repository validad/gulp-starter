var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var handleErrors = require('../util/handleErrors');
var config = require('../config').sass;

gulp.task('sass', ['images'], function () {
    return gulp.src(config.src)
    .pipe(sass({
        cacheLocation: '.sass-cache',
        loadPath: __dirname
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.dest));
});
