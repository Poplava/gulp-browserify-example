var gulp = require('gulp');
var browserify = require('gulp-browserify');

// Basic usage 
gulp.task('default', function() {
  // Single entry point to browserify
  gulp.src('src/app.js')
    .pipe(browserify({
      insertGlobals : true
    }))
    .pipe(gulp.dest('./build'))
});