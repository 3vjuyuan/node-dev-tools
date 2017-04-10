import gulpif from 'gulp-if';
import sprity from 'sprity';


module.exports ={
    fn:function (gulp,configuration) {
        return sprity.src({
            src:configuration.image.path.src+'/**/*.{png,jpg,gif,svg}',
            style:configuration.image.sprity.style,
            format:configuration.image.sprity.format,
            orientation :configuration.image.sprity.orientation,
            processor:configuration.image.sprity.processor,
            engine:configuration.image.sprity.engine,
            name:configuration.image.sprity.name,
            prefix:configuration.image.sprity.prefix,
        })
            .on('error',function (err) {
                console.log(err.toString());
            })
            .pipe(gulpif('*.png', gulp.dest(configuration.image.path.dest),
                gulp.dest(configuration.style.path.compiled+'/sprity')))
    }
}

