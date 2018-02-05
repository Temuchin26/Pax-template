"use strict";
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass = require('gulp-sass'),
    useref = require('gulp-useref'),
    rimraf = require('rimraf'),
    gulpIf = require('gulp-if'),
    uglify = require('gulp-uglify'),
    csso = require('gulp-csso'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer');

gulp.task('server', function() {
    browserSync.init({
      server: {
        port: 3000,
        baseDir: "./app"
      }
    });
});

gulp.task('styles', function(){
  gulp.src('./app/sass/**/**.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(prefix({
      browsers: ['last 15 versions']
    }))
    .pipe( gulp.dest('./app/css') )
    .pipe(browserSync.stream());
});

gulp.task('clean', function(cb) {
  rimraf('./build' , cb);
});

gulp.task('build', ['clean'], function(){
  gulp.src('./app/*.html')
    .pipe(useref())
    //.pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', csso()))
    .pipe(gulp.dest('./build'))
})


gulp.task('watch', function(){
  gulp.watch('./app/sass/**/*.sass', ['styles']);
});

gulp.task('default', ['watch', 'server']);
