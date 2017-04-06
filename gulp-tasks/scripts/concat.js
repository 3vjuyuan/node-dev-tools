import modernizr from 'gulp-modernizr';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

module.exports = {
    dep: ['scripts:compile'],
    fn: function (gulp,configuration,connect) {
        return gulp.src(configuration.script.path.compiled + '/*.js')
            .pipe(modernizr())
            .pipe(uglify())
            .pipe(concat('/app.min.js',{prefix:99}))
            .pipe(gulp.dest(configuration.script.path.dest))
            .pipe(connect.reload());
    }
}
