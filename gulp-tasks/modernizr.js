import modernizr from 'gulp-modernizr';
import uglify from 'gulp-uglify';

module.exports = {
    fn: function (gulp,configuration) {
        return gulp.src([configuration.script.path.compiled + '/*.js',configuration.style.path.src.sass + '/**/*.scss'])
            .pipe(modernizr())
            .pipe(uglify())
            .pipe(gulp.dest(configuration.script.path.dest))
    }
}