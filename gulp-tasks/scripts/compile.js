import browserify from 'browserify';
import babelify from 'babelify';
import es2015 from 'babel-preset-es2015';
import react from 'babel-preset-react';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

module.exports = {
    dep: ['scripts:lint'],
    fn: function (gulp,configuration,connect) {
        return browserify(configuration.script.path.src+configuration.entry.path)
            .transform(babelify, {
                presets: ['es2015', 'react','stage-0']
            })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(gulp.dest(configuration.script.path.compiled));
    }
}
