var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('default', function() {

  gulp.src('src/app.js')
    .pipe(browserify())
    .pipe(gulp.dest('./build'))

});