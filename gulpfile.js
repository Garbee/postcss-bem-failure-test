var gulp = require('gulp');
var postcss = require('gulp-postcss');
var reporter = require('postcss-reporter');
var bemLinter = require('postcss-bem-linter');

gulp.task('style', function() {
  return gulp.src('appbar.css')
  .pipe(postcss([
    bemLinter('bem', {
      presetOptions: {
        namespace: 'mdl'
      }
    }),
    reporter({clearMessages: true})
  ])).pipe(gulp.dest('dist'));
});
