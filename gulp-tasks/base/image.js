const fs   = require('fs');
const path = require('path');
const yaml = require('js-yaml');
const gulpif = require('gulp-if');
const sprity = require('sprity');
module.exports = function (gulp, callback) {
    const config = yaml.load(
        fs.readFileSync('config.yml', 'utf8')
    );
    return sprity.src({
        src:config.image.src+'/**/*.*',
        style:'./icon.scss',
        format:'png',
        orientation :'binary-tree',
        processor:'sass',
        'style-type':'scss',
        engine:'gm',
        name:'icon',
    })

        .pipe(gulpif('*.png', gulp.dest(config.image.dest),gulp.dest(config.sass.src+'/sprity')))
};