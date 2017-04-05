import sass from 'gulp-sass';
import concat from 'gulp-concat';
import sourcemaps from 'gulp-sourcemaps';
import gulputil from 'gulp-util';
import prefix from 'gulp-autoprefixer';

module.exports = {
    dep: ['styles:lint'],
    fn: function (gulp, configuration, connect) {
        return gulp.src(configuration.style.path.src + '/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed',
                includePaths: configuration.style.path.vendors
            }).on('error',gulputil.log))
            .pipe(prefix('last 2 version', 'ie 10'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.style.path.compiled));
    }
};