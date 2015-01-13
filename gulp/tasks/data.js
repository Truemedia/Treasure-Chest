// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util');

// Settings
var config = require('./../config.json');

// Pipes
var json = require('./../pipes/json');

/* Compile application data */
gulp.task('data', 'Compile application data', function()
{
	gutil.log( gutil.colors.magenta('Compiling application data') );
	return gulp.src(config.tasks.jsonlint.src)
		.pipe( json.pipeline() );
});