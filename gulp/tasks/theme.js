// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util');

// Settings
var config = require('./../config.json');

// Pipes
var css = require('./../pipes/css');

/* Render website theme */
gulp.task('theme', 'Render website theme', function()
{
	gutil.log( gutil.colors.magenta('Rendering website theme') );
	return gulp.src(config.tasks.css.src)
		.pipe( css.pipeline() )
		.pipe( gulp.dest(config.tasks.css.dest) );
});