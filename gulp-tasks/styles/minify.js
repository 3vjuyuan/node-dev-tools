import concat from 'gulp-concat';
import cleanCSS from 'gulp-clean-css';
import sourceMaps from 'gulp-sourcemaps';

module.exports = {
    dep: ['styles:compile'],
    fn: function (gulp, configuration) {
        return gulp.src([
            configuration.style.path.compiled + '/**/*.css',
            configuration.style.path.src.css + '/**/*.css',
        ])
            .pipe(sourcemaps.init())
            .pipe(cleanCSS())
            .pipe(concat('app.min.css'))
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest(configuration.style.path.dest));
    }
};