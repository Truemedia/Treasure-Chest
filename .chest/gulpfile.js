// Gulp core and plugins loader
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	$ = require('gulp-load-plugins')();

// Command line help
require('gulp-help')(gulp);

// Settings
config = require('./../gulp/config.json');

var baseDir = './../'; // TODO: look into symlink CWD
var requireDir = require('require-dir');
requireDir(baseDir + 'gulp/tasks', { recurse: true });

/* Grouped tasks */

// Automated workflow
gulp.task('default', 'Run automated development environment', ['browser-sync'], function()
{
	console.log("Regeneration process initialized");

	// Watch files to trigger tasks
	$.watch(config.tasks.default.src, ['sprite', 'css']);
});

// Assets
gulp.task('assets', 'Compile all client side assets', ['scripts', 'css', 'sprite'], function()
{
	console.log("Assets merged into project");
});

// Conduct tests on source code for stability
gulp.task('tests', 'Run code testing procedures', ['jsonlint', 'lint', 'unit'], function()
{
	console.log("Conducting tests");
});

// Gulp plugins (incompatable with plugin loader)
var cover = require('gulp-coverage'),
	spritesmith = require('gulp.spritesmith'),
	browserSync = require('browser-sync'),
	glob = require('glob'),
	sass = require('gulp-sass');

// Config
var theme = 'default';