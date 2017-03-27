const fs   = require('fs');
const path = require('path');
const gulp = require('gulp');
const babel = require('gulp-babel');
const browserify = require('browserify');
const babelify = require('babelify');
const es2015 = require('babel-preset-es2015');
const react = require('babel-preset-react');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const yaml = require('js-yaml');

js = () => {
    try {
        const config = yaml.load(
            fs.readFileSync('config.yml', 'utf8')
        );
        //const jsSrc = config.script.src;
        const jsDest = config.script.dest;
        return browserify("main.js")
           .transform(babelify, {
              presets: ['es2015', 'react','stage-0']
           })
           .bundle()
           .pipe(source('bundle.js'))
           .pipe(buffer())
           .pipe(gulp.dest(jsDest))
    } catch (e) {
        console.log(e);
    }
}
js();
