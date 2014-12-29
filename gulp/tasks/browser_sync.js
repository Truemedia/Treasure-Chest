// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	browserSync = require('browser-sync');

// Settings
config = require('./../config.json');

/* Browser sync */
gulp.task('browser-sync', 'Synchronize changes between repo and browsers automatically', function()
{
    browserSync.init(config.tasks.browser_sync.src, {
        server: {
            baseDir: config.tasks.browser_sync.dest
        }
    });
});