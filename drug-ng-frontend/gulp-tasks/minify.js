var gulp = require('gulp');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var bowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');

var appName = require('../package').name;

gulp.task('uglify', function() {
    return gulp.src(['./src/**/*.js', 'build/*.tpl.js'])
        .pipe(angularFilesort())
        .pipe(sourcemaps.init())
        .pipe(concat(appName + '.min.js'))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('minify-css', function() {
    return gulp.src('./resources/**/*.css')
        .pipe(concat(appName + '.min.css'))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/resources/styles/css/'));
});

gulp.task('vendor-uglify', function() {
    return gulp.src(bowerFiles('**/*.js'))
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts/'));
});

gulp.task('vendor-minify-css', function() {
    return gulp.src(bowerFiles('**/*.css'))
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCSS({
            keepBreaks: true
        }))
        .pipe(gulp.dest('dist/resources/styles/css/'));
});

gulp.task('minify-all',
    gulp.parallel([
        'uglify',
        'minify-css',
        'vendor-uglify',
        'vendor-minify-css'
    ])
);
