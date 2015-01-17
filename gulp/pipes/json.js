/* Gulp plugins, and Lazypipe */
var jsonlint = require('gulp-json-lint'),
	lazypipe = require('lazypipe');

/* Pipeline */
exports.pipeline = lazypipe()
	.pipe(jsonlint)
	.pipe(jsonlint.report, 'verbose');