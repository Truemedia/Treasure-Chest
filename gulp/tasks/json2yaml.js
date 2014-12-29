// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	convert = require('gulp-convert');

// Settings
config = require('./../config.json');

gulp.task('json2yaml', function()
{
	gulp.src(config.tasks.json2yaml.src)
    	.pipe( convert({ from: 'json', to: 'yml' }))
    	.pipe( gulp.dest(config.tasks.json2yaml.dest) );
});