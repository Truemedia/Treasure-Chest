// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util');

// Settings
config = require('./../config.json');

/* Verify and publish any changes to the codebase */
gulp.task('publish', 'Publish changes to a git repository', ['tests'], function()
{
	// Commit work
	// TODO: Add code for FTP sample
	// return gulp.src(config.tasks.publish.src)
 //  		.pipe( git.commit('Commit using gulp-git') );
});