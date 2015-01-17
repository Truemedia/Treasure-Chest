/* Gulp plugins, and Lazypipe */
var sass = require('gulp-ruby-sass'),
	lazypipe = require('lazypipe');

/* Pipeline */
exports.pipeline = lazypipe()
	// .pipe(less)
    .pipe(sass);