import gulpif from 'gulp-if';
import sprity from 'sprity';


module.exports ={
    fn:function (gulp,configuration) {
        return sprity.src({
            src:configuration.image.path.src+'/**/*.{png,jpg,gif,svg}',
            style:'./sprity.css',
            format:'png',
            orientation :'binary-tree',
            processor:'css',
            engine:'gm',
            name:'sprity',
            prefix:'sprity',
        })
            .on('error',function (err) {
                console.log(err.toString());
            })

            .pipe(gulpif('*.png', gulp.dest(configuration.image.path.dest),
                gulp.dest(configuration.style.path.compiled+'/sprity')))
    }
}

