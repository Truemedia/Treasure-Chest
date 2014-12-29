// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserify = require('gulp-browserify'),
	concat = require('gulp-concat');

// Settings
config = require('./../config.json');

/* Compile and compress frontend scripts */
gulp.task('scripts', 'Compile all frontend scripts into a single file', function()
{
    // Single entry point to browserify
    gulp.src(config.tasks.scripts.src)
        .pipe( browserify({ insertGlobals : true }) )
        .pipe( concat(config.tasks.scripts.dest) )
        .pipe( gulp.dest('.') );
});