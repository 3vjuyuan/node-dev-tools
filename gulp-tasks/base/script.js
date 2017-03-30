import browserify from 'browserify';
import babelify from 'babelify';
import es2015 from 'babel-preset-es2015';
import react from 'babel-preset-react';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import jslint from 'gulp-jslint';
import modernizr from 'gulp-modernizr';

module.exports = {
    fn:function(gulp,configuration){
        return browserify(configuration.script.src+"/index.js")
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
           .pipe(gulp.dest(configuration.script.dest))
    }
}
