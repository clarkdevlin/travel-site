const gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested')

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        htmlProcess()
    })

    watch('./app/assets/styles/**/*.css', function(){
        stylesProcess()
    })
})

function htmlProcess(){
    console.log('HTML task performed')
}

function stylesProcess(){
    console.log("Processing CSS")
    return gulp.src('./app/assets/styles/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))        
    .pipe(gulp.dest('./app/temp/styles'))
}
