const gulp = require("gulp");
const sass = require("gulp-sass");
const print = require("gulp-print").default
const cssnano = require("gulp-cssnano");
const reports = require("gulp-sizereport");
const replace = require('gulp-string-replace')

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

})(process.argv)

gulp.task('default', function(){
	console.log('Gulp default')
})

gulp.task("reports", () =>
  gulp.src("./dist/**/*.*")
  .pipe(reports({ gzip: true }))
);

gulp.task('riot-html', () => {

})


/**
 * Scaffold for components, pages
 *
 * gulp new:component --name package-name
 * gulp new:component --name sg-cart
 * lerna bootstrap
 */

// gulp.task("new:component", () => {
//   scaffold('component')
// })

gulp.task("new:page", () => {
  scaffold("pages", "pages" )
})

gulp.task("new:component", () => {
  scaffold("vue-starter" )
})

const scaffold = (sourceFolder, targetFolder = 'components') => {
  let packageName = arg.name || arg.n
  let packageTitle = capitalize(packageName.replace('-', ' '))
  const dir = `scaffolds/${sourceFolder}/**/*.*`
  gulp.src([dir] )
  .pipe(replace('package-name', packageName))
  .pipe(replace('package-title', packageTitle))
  .pipe(gulp.dest(`./${targetFolder}/${packageName}` ))
  .pipe(print())
}

const capitalize =  function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
