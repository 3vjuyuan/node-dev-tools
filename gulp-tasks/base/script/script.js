import browserify from 'browserify';
import babelify from 'babelify';
import es2015 from 'babel-preset-es2015';
import react from 'babel-preset-react';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import jslint from 'gulp-jslint';
import modernizr from 'gulp-modernizr';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';

module.exports = {
    fn:function(gulp,configuration,connect){
        return browserify(configuration.script.path.src+configuration.entry.path)
            .transform(babelify, {
                presets: ['es2015', 'react','stage-0']
            })
            .bundle()
            .pipe(source('bundle.js'))
            .pipe(buffer())
            .pipe(jslint({
                predef: [ 'a_global' ],
                global: [ 'a_global' ]
            }))
            .pipe(modernizr())
            .pipe(uglify())
            .pipe(concat('/app.min.js', {prefix: 99}))
            .pipe(gulp.dest(configuration.script.path.dest))
            .pipe(connect.onload());
    }
}
