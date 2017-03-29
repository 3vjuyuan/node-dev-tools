import gulp from 'gulp';
import babel from 'gulp-babel';
import browserify from 'browserify';
import babelify from 'babelify';
import es2015 from 'babel-preset-es2015';
import react from 'babel-preset-react';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

module.exports = {
    fn:function(gulp,configuration){
        const jsSrc = configuration.script.src;
        const jsDest = configuration.script.dest;
        return browserify(jsSrc+"/index.js")
           .transform(babelify, {
              presets: ['es2015', 'react','stage-0']
           })
           .bundle()
           .pipe(source('bundle.js'))
           .pipe(buffer())
           .pipe(gulp.dest(jsDest))
    }
}
