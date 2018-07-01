const gulp = require('gulp')
const sass = require('gulp-sass')


var buildSrc = "src";
var buildDest = "dist";

/*
  Compile SCSS files to CSS
*/
gulp.task("scss", function () {
  return gulp.src(buildSrc + "/scss/main.scss")
    .pipe(sass({
      outputStyle: "compressed"
    }).on('error', sass.logError))
    .pipe(gulp.dest(buildDest + "/css"))
});
