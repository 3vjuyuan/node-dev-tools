import concat from 'gulp-concat';

module.exports = {
    dep: ['scripts:compile'],
    fn: function (gulp,configuration,connect) {
        return gulp.src(configuration.script.path.compiled + '/*.js')
            .pipe(concat('/app.min.js',{prefix:99}))
            .pipe(gulp.dest(configuration.script.path.dest))
            .pipe(connect.reload());
    }
}
