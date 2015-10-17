var gulp = require('gulp');

gulp.task('copy',
    gulp.parallel([
        function () {
            return gulp.src(['resources/styles/fonts/*'])
                .pipe(gulp.dest('dist/resources/styles/fonts/'));
        },
        function () {
            return gulp.src(['resources/styles/images/*'])
                .pipe(gulp.dest('dist/resources/styles/images/'));
        },
        function () {
            return gulp.src(['bower.json', 'package.json', 'README.md'])
                .pipe(gulp.dest('dist/'));
        }
    ])
);
