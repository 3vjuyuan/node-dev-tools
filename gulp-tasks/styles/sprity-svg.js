import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

module.exports = {
    fn: function (gulp, configuration) {
       return  gulp.src(configuration.image.path.src + '/**/*.svg')
            .pipe(plumber())
            .pipe(svgSprite(configuration.image.svgsprityconfig))
            .on('error',function (error) {
                console.log(error.toString());
            })
            .pipe(gulp.dest('.'))
    }
}

