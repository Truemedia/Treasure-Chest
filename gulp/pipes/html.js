/* Gulp plugins, and Lazypipe */
var gulpPlugins = require('auto-plug')(),
	lazypipe = require('lazypipe');

/* Pipeline */
exports.pipeline = lazypipe()
	.pipe( function()
	{
		return gulpPlugins.layoutize({
        	templatePath: config.tasks.templates.src,
    		engine: 'mustache',
    		locals: require('./../../regeneration.dev/public/packages/social/data.json')
    	});
	})
    .pipe(gulpPlugins.rename, function(path) { path.extname = ".html"; })
    .pipe(gulpPlugins.htmlclean);