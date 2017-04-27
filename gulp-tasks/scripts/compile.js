import gutil from 'gulp-util';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cached from 'gulp-cached';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import es from 'event-stream';

module.exports = {
    dep: ['scripts:lint'],
    fn: function (gulp, configuration) {
        return es.merge(
            gulp.src(configuration.script.path.libs),
            gulp.src(configuration.script.path.src + '/**/*.js')
                .pipe(cached('compileJs'))
                .pipe(sourcemaps.init())
                .pipe(babel())
                .on("error", function (error) {
                    gutil.log(
                        gutil.colors.red("Javascript compile error:"),
                        error.message
                    );
                })
        )
            .pipe(uglify({preserveComments: 'some'}))
            .pipe(concat('/' + configuration.script.targetName, {prefix: 99}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.script.path.dest));
    }
}