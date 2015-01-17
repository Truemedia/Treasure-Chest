// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util');

// Settings
var config = require('./../config.json');

// Pipes
var html = require('./../pipes/html');

/* Compile application data */
gulp.task('templates', 'Compile templates', function()
{
	gutil.log( gutil.colors.magenta('Compiling application data') );
	return gulp.src(config.tasks.templates.src)
		.pipe( html.pipeline() )
    	.pipe( gulp.dest(config.tasks.templates.dest) );
});