var gulp = require('gulp');
var fs = require('fs');

fs.readdirSync('gulp-tasks').forEach(function (file) {
	require('./gulp-tasks/'+file);
});

gulp.task('default',
	gulp.series([
		'clean',
		'templates',
		'inject-dev',
		gulp.parallel(['server','watch'])
	])
);


gulp.task('cibuild',
	gulp.series([
		'clean',
		'templates'
	])
);

gulp.task('dist',
	gulp.series([
		'minify-all',
		'copy',
		'inject-dist'
	])
);
