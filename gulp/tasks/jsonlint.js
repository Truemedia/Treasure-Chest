// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	jsonlint = require('gulp-json-lint');

// Settings
config = require('./../config.json');

/* Validate all JSON files inside the project folder */
gulp.task('jsonlint', 'Validate all JSON source files', function()
{
	console.log("Verifying data format consistency");
	return gulp.src(config.tasks.jsonlint.src)
		.pipe( jsonlint() )
		.pipe( jsonlint.report('verbose') );
});