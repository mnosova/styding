'use strict';

const gulp = require('gulp'),
    browserSync = require('browser-sync');

function browserS() {
    browserSync({
        server: {
            baseDir: 'src',
            proxy: "localhost:3001"
        },
        notify: false
    });
}

//watch
gulp.task('watch', gulp.series(gulp.parallel(browserS, function () {
    gulp.watch('src/**/*.html').on('change', browserSync.reload);
})));









