import eslint from 'gulp-eslint';

module.exports = {
    fn: function (gulp,configuration,connect) {
        return gulp.src([configuration.script.path.src+'*.js','!node_modules/**'])
            .pipe(eslint({
                globals: [
                    'jQuery',
                    '$'
                ],
                envs: [
                    'browser'
                ]
            }))
            .pipe(eslint.format())
    }
}

