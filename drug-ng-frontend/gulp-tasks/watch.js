var gulp = require('gulp');
var connect = require('gulp-connect');
var templates = require('./templates');

var jsFiles = ['src/**/*.js'];

gulp.task('watch', function() {
    gulp.watch('src/**/*.html', gulp.series(templates(), reloadHTML));
    gulp.watch(jsFiles, reloadJS);
    gulp.watch('resources/**/*.css', reloadCSS);
});

// Function to reload JS files
function reloadJS() {
    return gulp.src(jsFiles)
        .pipe(connect.reload());
};

// reload HTML files
function reloadHTML() {
    return gulp.src('build/*.tpl.js')
        .pipe(connect.reload());
};

// reload CSS files
function reloadCSS() {
    return gulp.src('resources/**/*.css')
        .pipe(connect.reload());
};
