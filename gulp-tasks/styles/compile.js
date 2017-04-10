import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import gulputil from 'gulp-util';
import prefix from 'gulp-autoprefixer';

module.exports = {
    dep: ['styles:lint'],
    fn: function (gulp, configuration) {
        return gulp.src(configuration.style.path.src.sass + '/**/*.scss')
            .pipe(sourcemaps.init())
            .pipe(sass({
                outputStyle: 'compressed',
                includePaths: configuration.style.path.vendors
            }).on('error',gulputil.log))
            .pipe(prefix({
                browsers:[configuration.style.autoprefix.browser],
                env:configuration.style.autoprefix.env
            }))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.style.path.compiled));
    }
};