// Initialize modules
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

gulp.task("sass", function () {
    return ( gulp.src('style/style.scss')
        .pipe(sass()
            .on('error', sass.logError)
        )
        .pipe(gulp.dest('dist')) );
});

gulp.task('scripts', function () {
    return gulp.src(['js/*.js', 'js/*.js'])
        .pipe(concat('all.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', gulp.series('sass', 'scripts'));