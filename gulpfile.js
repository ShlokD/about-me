const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnext = require('gulp-cssnext');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');

gulp.task('default', () => {
  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(cssnext())
  .pipe(autoprefixer())
  .pipe(cssnano())
  .on('error', sass.logError)
  .pipe(gulp.dest('dist/css'));
});
