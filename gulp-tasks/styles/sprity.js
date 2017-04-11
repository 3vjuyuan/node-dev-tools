import gulpif from 'gulp-if';
import sprity from 'sprity';
import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

module.exports = {
    fn: function (gulp, configuration) {
         gulp.src(configuration.image.path.src + '/**/*.svg')
            .pipe(plumber())
            .pipe(svgSprite(configuration.image.svgsprityconfig))
            .on('error',function (error) {
                console.log(error.toString());
            })
            .pipe(gulp.dest('.'))

        return sprity.src(configuration.image.sprity)
            .on('error', function (err) {
                console.log(err.toString());
            })
            .pipe(gulpif('*.png', gulp.dest(configuration.image.path.dest),
                gulp.dest(configuration.style.path.src.css)))
        
    }
}

