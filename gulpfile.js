var sourcemaps = require('gulp-sourcemaps');
var sass = require("gulp-sass");
var gulp = require('gulp');


gulp.task('sass', function() {
return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({errLogToConsole: true}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
    gulp.watch('sass/*.scss', ['sass']);//wyszukuje wszystkie pliki scss
})
