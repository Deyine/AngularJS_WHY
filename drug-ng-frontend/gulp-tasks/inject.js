var gulp = require('gulp');
var bowerFiles = require('main-bower-files');
var inject = require('gulp-inject');
var angularFilesort = require('gulp-angular-filesort');

gulp.task('inject-dev', function() {
  return gulp.src('./src/index.html')
  .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
  .pipe(inject(gulp.src(['./src/**/*.js','build/*.tpl.js']).pipe(angularFilesort())))
  .pipe(inject(gulp.src(['./resources/**/*.css'])))
  .pipe(gulp.dest('./build'));
});

var appName = require('../package').name;

var removeDistFromPath =  function (filepath) {
  return inject.transform.apply(inject.transform, arguments).replace('/dist/','');
};

gulp.task('inject-dist', function() {
  return gulp.src('./src/index.html')
  .pipe(inject(gulp.src('dist/**/vendor*', {read: false}), {name: 'bower',transform:removeDistFromPath}))
  .pipe(inject(gulp.src(['dist/**/'+appName+'*'], {read: false}),{transform:removeDistFromPath}))
  .pipe(gulp.dest('./dist'));
});
