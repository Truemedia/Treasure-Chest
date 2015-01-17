// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util');

// Settings
var config = require('./../config.json');

// Pipes
// var json = require('./../pipes/json');
var layoutize = require('gulp-layoutize'),
	rename = require('gulp-rename'),
	htmlclean = require('gulp-htmlclean');

/* Compile application data */
gulp.task('templates', 'Compile templates', function()
{
	var ext

	gutil.log( gutil.colors.magenta('Compiling application data') );
	return gulp.src(config.tasks.templates.src)
		.pipe( layoutize({
        	templatePath: config.tasks.templates.src,
    		engine: 'mustache',
    		locals: require('./../../regeneration.dev/public/packages/social/data.json')
    	}))
    	.pipe( rename( function(path)
    	{
	        path.extname = ".html";
    	}))
    	.pipe( htmlclean() )
    	.pipe( gulp.dest(config.tasks.templates.dest) );
});