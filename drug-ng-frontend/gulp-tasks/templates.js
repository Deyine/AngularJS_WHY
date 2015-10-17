var fs = require('fs');
var path = require('path');

var gulp = require('gulp');
var templateCache = require('gulp-angular-templatecache');

function camelCase(input) {
	return input.toLowerCase().replace(/-(.)/g, function(match, group1) {
		return group1.toUpperCase();
	});
}

var modules = fs.readdirSync('src').filter(function(file) {
	return fs.statSync(path.join('src', file)).isDirectory();
});

modules.forEach(function(module) {
	gulp.task('templates-' + module, function() {
		return gulp.src('src/' + module + '/**/*.html')
			.pipe(templateCache(module + '.tpl.js', {
				root: module,
				module: camelCase(module),
				standalone: false
			}))
			.pipe(gulp.dest('build/'));
	});
});

function templates() {
	return gulp.parallel.apply(gulp, modules.map(function(m) {
		return 'templates-' + m;
	}))
}

gulp.task('templates', templates());

module.exports = templates;
