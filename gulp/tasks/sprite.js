// Gulp core and plugins
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	spritesmith = require('gulp.spritesmith');

// Settings
config = require('./../config.json');

/* Compile map images into sprite and less file */
gulp.task('sprite', 'Create sprite from directory of images', function(map)
{
	console.log("Fusing visual assets into single entity");
	var spriteData = gulp.src(config.tasks.sprite.src)
		.pipe( spritesmith({
			imgName: config.tasks.sprite.dest.img,
			cssName: config.tasks.sprite.dest.css
		}));

	spriteData.img.pipe( gulp.dest(config.tasks.sprite.dest.dir) );
	spriteData.css.pipe( gulp.dest(config.tasks.sprite.dest.dir) );
});