// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	glob = require('glob'),
	

// Settings
config = require('./../config.json');

gulp.task('uncss', 'Clear out unused CSS selectors and rules from a stylesheet', function()
{
    return gulp.src(config.tasks.uncss.src.css)
        .pipe(uncss({
            html: glob.sync(config.tasks.uncss.src.tpl),
            ignore: ['#always_available_id']
        }))
        .pipe( gulp.dest(config.tasks.uncss.dest) );
});