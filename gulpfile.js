var gulp = require('gulp'),
	browserify = require('gulp-browserify'),
	rename = require('gulp-rename'),
	clean = require('gulp-clean');

gulp.task('clean', function(){
	return gulp.src('dist', { read: false })
		.pipe(clean());
});

gulp.task('build', function(){
	return gulp.src('src/index.jsx')
		.pipe(browserify({
			transform: ['reactify'],
			extensions: ['.jsx']
		}))
		.pipe(rename('app.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);

gulp.task('watch', function(){
	return gulp.watch('src/*.jsx', ['build']);
});