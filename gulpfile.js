const gulp = require('gulp'),
watch =require('gulp-watch')


gulp.task('html', function(){
    console.log('HTML task performed')
})

gulp.task('styles', function(){
    console.log('CSS task performed')
})

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html')
    })

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles')
    })
})
