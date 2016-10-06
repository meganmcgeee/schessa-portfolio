/* global require */
/* eslint-disable no-console */

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');

const scssDir = './style/*.scss';
const scssEntry = './style/style.scss';
const output = './public';

gulp.task('sass', function () {
  return gulp
    .src(scssEntry)
    .pipe(sourcemaps.init())
    .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(output));
});

gulp.task('watch', function() {
  return gulp
    .watch(scssDir, ['sass'])
    .on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});

gulp.task('default', ['sass', 'watch']);

gulp.task('prod', [], function () {
  return gulp
    .src(scssEntry)
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(autoprefixer())
    .pipe(gulp.dest(output));
});
