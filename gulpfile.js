var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean');

gulp.task('clean', function(){
	return gulp.src('dist', { read: false })
		.pipe(clean());
});

gulp.task('default', function(){
	return gulp.src('src/index.jsx')
		.pipe(browserify({
			transform: ['reactify'],
			extensions: ['.jsx']
		}))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('dist'));
});