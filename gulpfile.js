const gulp = require("gulp");
const sass = require("gulp-sass");
const print = require("gulp-print");
const cssnano = require("gulp-cssnano");
const reports = require("gulp-sizereport");
const copy = require('gulp-copy')

// fetch command line arguments
const arg = (argList => {

  let arg = {}, a, opt, thisOpt, curOpt;
  for (a = 0; a < argList.length; a++) {

    thisOpt = argList[a].trim();
    opt = thisOpt.replace(/^\-+/, '');

    if (opt === thisOpt) {

      // argument value
      if (curOpt) arg[curOpt] = opt;
      curOpt = null;

    }
    else {

      // argument name
      curOpt = opt;
      arg[curOpt] = true;

    }

  }

  return arg;

})(process.argv);

gulp.task("sass", () =>
  gulp
    .src("./src/stylesheets/*.scss", { base: "./src/stylesheets" })
    .pipe(sass().on("error", sass.logError))
    .pipe(reports({ gzip: true }))
    .pipe(cssnano())
    .pipe(gulp.dest("./gist/css"))
    .pipe(reports({ gzip: true }))
);

gulp.task("watch:sass", () => gulp.watch("./src/css/**/*.scss", ["sass"]));

gulp.task("reports", () =>
  gulp.src("./dist/**/*.*")
  .pipe(reports({ gzip: true }))
);

gulp.task("new-package", () => {
  let package_name = arg.name || arg.n
  console.log(package_name);
})
