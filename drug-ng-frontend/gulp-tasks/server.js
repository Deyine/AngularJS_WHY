var gulp = require('gulp');
var connect = require('gulp-connect');
var url = require('url');
var proxy = require('proxy-middleware');
// The environement variable is set here to allow seld signed certificates

var drugBackendProxyOptions = url.parse('http://localhost:3000/');
drugBackendProxyOptions.route = '/drug-api';

gulp.task('server', function() {
//  var proxyList = require('./proxy');
	//console.log(proxyList);
	connect.server({
		root: ['build','./'],
		port: 8000,
		livereload: true,
		middleware: function() {
			return [
				proxy(drugBackendProxyOptions)
			];
		}
	});
});

// used to test dist
gulp.task('server-dist', function() {
	connect.server({
		root: ['dist'],
		port: 8000,
		livereload: true,
		middleware: function() {
			return [
				proxy(drugBackendProxyOptions)
			];
		}
	});
});
