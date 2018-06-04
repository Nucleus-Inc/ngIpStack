'use strict'

import gulp from 'gulp'
import babel from 'gulp-babel'
import runSequence from 'gulp-run-sequence'
import rename from 'gulp-rename'

import yarn from 'gulp-yarn'
import minify from 'gulp-babel-minify'
import clean from 'gulp-clean'
import umd from 'gulp-umd'
import karma from 'karma'

const karmaServer = karma.Server

gulp.task('yarn', () => {
  return gulp.src(['./package.json'])
    .pipe(yarn())
})

gulp.task('minify', () => {
  return gulp.src('dist/foo.js')
    .pipe(minify({
      mangle: false
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'))
})

gulp.task('clean', () => {
  // return gulp.src(['public/tmp','public/dist/app.css','public/dist/config.js','public/dist/app.js'], {read: false})
  //   .pipe(clean({force: true}))
})

gulp.task('watch', () => {
  gulp.watch('gulpfile.babel.js', () => {
    runSequence('yarn','umd','minify')
  })
  gulp.watch(['src/*.js'], () => {
    runSequence('yarn','umd','minify')
  })
})

gulp.task('umd', function() {
  return gulp.src('src/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(umd())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', (done) => {
  karmaServer.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, () => { done() })
})

gulp.task('dev', () => {
  runSequence('yarn','umd','minify',['watch'])
})

gulp.task('default', () => {
  runSequence('yarn','umd','minify','clean',['watch'])
})
