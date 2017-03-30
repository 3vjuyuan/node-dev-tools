import gulpif from 'gulp-if';
import sprity from 'sprity';


module.exports ={
    fn:function (gulp,configration) {
        return sprity.src({
            src:configration.image.path.src+'/**/*.*',
            style:'./icon.scss',
            format:'png',
            orientation :'binary-tree',
            processor:'sass',
            'style-type':'scss',
            engine:'gm',
            name:'icon',
        })

            .pipe(gulpif('*.png', gulp.dest(configration.image.path.dest),
                gulp.dest(configration.style.path.src+'/sprity')))
    }
}

