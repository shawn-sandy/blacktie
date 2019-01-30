const gulp = require('gulp')
const prefixer = require('gulp-autoprefixer')
const sass = require('gulp-dart-sass')
const cleanCss = require('gulp-clean-css')
const print = require('gulp-print').default
const reports = require('gulp-sizereport')
const rename = require('gulp-rename')
const sourcemaps = require('gulp-sourcemaps')

gulp.task('sass', () => {
  return gulp
    .src('./src/bootstrap-lite.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(prefixer())
    .pipe(gulp.dest('./dist'))
    .pipe(cleanCss())
    .pipe(rename('bootstrap-lite.min.css'))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist'))
      .pipe(print())
})

gulp.task('reports', () => {
  return gulp.src('./dist/*')
  .pipe(reports({
    gzip: true
  }))
}
)

gulp.task("watch", () =>
  gulp.watch("./src/**/*.scss", gulp.parallel("sass"))
);
