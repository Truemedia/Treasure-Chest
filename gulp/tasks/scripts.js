// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	filelog = require('gulp-filelog');
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer');

// Settings
var config = require('./../config.json');

// Pipes
var js = require('./../pipes/js');

/* Compile and compress frontend scripts */
gulp.task('scripts', 'Compile all frontend scripts into a single file', function()
{
	var sourcemaps = false;
	var bundler = browserify({ entries: [config.tasks.scripts.src], debug: sourcemaps });

    var bundle = function()
	{
	    return bundler
	      .bundle()
	      .pipe( source(config.tasks.scripts.dest) )
	      .pipe( buffer() )
	      .pipe( js.pipeline() )
	      .pipe( gulp.dest('./public/') )
	};

	return bundle();
});