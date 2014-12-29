// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	less = require('gulp-less'),
	sass = require('gulp-sass');

// Settings
config = require('./../config.json');

/* Render CSS files from pre-processing and post-processing */
gulp.task('css', 'Render CSS files using pre-processing and post-processing', function()
{
	gutil.log( gutil.colors.magenta('Rendering CSS files using pre-processing and post-processing') );
	return gulp.src(config.tasks.css.src)
		// .pipe( less() )
		.pipe( sass() )
		.pipe( gulp.dest(config.tasks.css.dest) )
		// .pipe( $.filter('**/*.css') ) // Filtering stream to only css files
	 //    .pipe(browserSync.reload({stream:true}));
});