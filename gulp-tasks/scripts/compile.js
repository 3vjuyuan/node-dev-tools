import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import gutil from 'gulp-util';

module.exports = {
    dep: ['scripts:lint'],
    fn: function (gulp, configuration, connect) {
        return browserify(configuration.script.path.src + configuration.script.path.entryFile)
            .transform(babelify)
            .bundle()
            .on("error", function (error) {
                gutil.log(
                    gutil.colors.red("Javascript compile error:"),
                    error.message
                );
            })
            .pipe(source('application.js'))
            .pipe(buffer())
            .pipe(gulp.dest(configuration.script.path.compiled));
    }
}
