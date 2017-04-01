import gulpif from 'gulp-if';
import sprity from 'sprity';


module.exports ={
    fn:function (gulp,configuration) {
        return sprity.src({
            src:configuration.image.path.src+'/**/*.*',
            style:'./icon.scss',
            format:'png',
            orientation :'binary-tree',
            processor:'sass',
            'style-type':'scss',
            engine:'gm',
            name:'icon',
        })

            .pipe(gulpif('*.png', gulp.dest(configuration.image.path.dest),
                gulp.dest(configuration.style.path.src+'/sprity')))
    }
}

