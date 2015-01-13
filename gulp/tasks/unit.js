// Gulp core and plugins
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    cover = require('gulp-coverage'),
    expect = require('gulp-expect-file'),
    lazypipe = require('lazypipe'),
    mocha = require('gulp-mocha');

// Settings
config = require('./../config.json');

gulp.task('unit', 'Run TDD/BDD unit tests', function()
{
	console.log("Unit testing application using BDD and TDD");
    return gulp.src(config.tasks.unit.src, { read: false })
        .pipe( expect({ errorOnFailure: true }, config.tasks.unit.src) )
        .on('error', function (error)
        {
            throw new Error(error);
        })
        .pipe( cover.instrument({ pattern: ['**/main*'], debugDirectory: 'debug' }) )
        .pipe( mocha({ ui: 'tdd', reporter: 'nyan' }) )
    	.pipe( cover.report({ outFile: config.tasks.unit.dest }) );
});