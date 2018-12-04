const gulp = require('gulp'),
browserSync = require('browser-sync').create()

gulp.task('watch', function(){

    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    })

    gulp.watch('./app/index.html', function(){
        browserSync.reload();
    })

    gulp.watch('./app/assets/styles/**/*.css', gulp.series('styles','cssInject'))
})

gulp.task('cssInject', function (){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream())
})

