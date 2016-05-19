var gulp = require('gulp');
var browserify = require('gulp-browserify');
var babelify = require('babelify');

gulp.task('default', function() {

  gulp.src('src/app.js')
    .pipe(browserify({
      transform: babelify.configure({
        presets: ['es2015', 'react']
      })
    }))
    .pipe(gulp.dest('./build'))

});

gulp.task('watch', ['default'], function() {
  gulp.watch('src/**/*.js', ['default']);
});