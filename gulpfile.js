var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var gulpConcat = require('gulp-concat');
var gulpUglify = require('gulp-uglify');

gulp.task('lib', function(){
    return gulp.src(['node_modules/angular/angular.min.js', 
                     'node_modules/angular-route/angular-route.min.js',
                     'node_modules/jquery/dist/jquery.min.js',
                     'node_modules/bootstrap/dist/js/bootstrap.min.js'])
                .pipe(gulp.dest('./src/lib'));
});

gulp.task('js', function() {
  return gulp.src(['./src/scripts/*.js',
                    './src/scripts/controllers/*.js',
                    './src/scripts/services/*.js',
                    './src/scripts/directives/*.js'])
    .pipe(gulpConcat('studioApp.js'))
    .pipe(gulp.dest('./src/js'));
});

// gulp.task('html', function(){
//     return gulp.src(['src/*.html','src/scripts/partials/*.html'])
//                 .pipe(gulp.dest('./src/'));
// });

gulp.task('css', function() {
    return gulp.src(['src/assets/css/*.css', 'src/lib/bootstrap.min.css'])
                .pipe(gulp.dest('./src/css/'))
                .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: './src'
    });

    gulp.watch(['src/scripts/*.js',
                './src/scripts/controllers/*.js',
                './src/scripts/services/*.js',
                './src/scripts/directives/*.js']).on('change', browserSync.reload);
                
    gulp.watch(['src/*.html','src/scripts/partials/*.html','src/scripts/directives/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['lib', 'css', 'js', 'serve']);