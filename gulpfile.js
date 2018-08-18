const gulp = require('gulp');
const sass = require('gulp-sass');
const cssnext = require('gulp-cssnext');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('build:css', function() {
  return gulp.src('scss/*.scss')
  .pipe(sass())
  .pipe(cssnext())
  .pipe(autoprefixer())
  .pipe(cssnano())
  .on('error', sass.logError)
  .pipe(gulp.dest('dist/css'));
});

gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: '.'
    }
  });

  gulp.watch(['*.html', 'dist/css/**/*.css'], {cwd: '.'}, reload);
});

gulp.task('build:watch', function() {
  gulp.watch('scss/**/*.scss', ['build:css']);
});


gulp.task('hot',['serve', 'build:watch']);
gulp.task('default', ['build:css']);