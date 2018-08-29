'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')
const prefix = require('gulp-autoprefixer')

gulp.task('sass', () => {
return gulp.src('./*.scss')
.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
.pipe(prefix())
.pipe(gulp.dest('./dist'))

})
