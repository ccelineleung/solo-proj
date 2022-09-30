var gulp = require('gulp')
var webpack = require('webpack-stream')

gulp.task('webpack', function() {
    return gulp.src('./index.jsx')
        .pipe(webpack(require('./webpack.config')))
        .pipe(gulp.dest('./'));
});
