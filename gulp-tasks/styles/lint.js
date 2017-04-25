import cached from 'gulp-cached';
import sassLint from 'gulp-sass-lint';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src(configuration.style.path.src + '/**/*.scss')
            .pipe(cached('sassLint'))
            .pipe(sassLint({
                config: configuration.style.path.lint,
                endless: true
            }))
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError());
    }
};