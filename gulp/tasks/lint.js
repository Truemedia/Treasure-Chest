// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jshint = require('gulp-jshint');

// Settings
config = require('./../config.json');

/* JSHint */
gulp.task('lint', 'Check coding style for irregularities and broken syntax', function()
{
	return gulp.src(config.tasks.lint.src)
    	.pipe( jshint() )
    	.pipe( jshint.reporter('default') );
});