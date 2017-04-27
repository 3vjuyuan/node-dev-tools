import modernizr from 'gulp-modernizr';
import uglify from 'gulp-uglify';

module.exports = {
    dep: ['scripts:compile'],
    fn: function (gulp, configuration) {
        return gulp.src([
            configuration.style.path.src.css + '/**/*.css',
            configuration.style.path.src.sass + '/**/*.{scss, sass}',
            configuration.script.path.src + '/**/*.js'
        ])
            .pipe(modernizr())
            .pipe(uglify({preserveComments: 'some'}))
            .pipe(gulp.dest(configuration.script.path.dest))
    }
};