import eslint from 'gulp-eslint';
import cached from 'gulp-cached';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src(configuration.script.path.src + '/**/*.js')
            .pipe(cached('esLint'))
            .pipe(eslint())
            .pipe(eslint.format())
            .pipe(eslint.failAfterError())
    }
};