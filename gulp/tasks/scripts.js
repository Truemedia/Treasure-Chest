// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	filelog = require('gulp-filelog');
	browserify = require('browserify');

// Browserify extras
var es6ify = require('es6ify');
var source = require('vinyl-source-stream');

// Settings
var config = require('./../config.json');

// Pipes
var js = require('./../pipes/js');

/* Compile and compress frontend scripts */
gulp.task('scripts', 'Compile all frontend scripts into a single file', function()
{
	var sourcemaps = false;

	return browserify(es6ify.runtime)
	.add('./public/main.js')
	.transform(es6ify)
	.bundle()
	.pipe(source('script.min.js'))
	.pipe( gulp.dest('./public/') );
});