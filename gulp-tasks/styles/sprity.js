import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';
module.exports = {
    dep:['styles:sprity-svg','styles:sprity-img'],
    fn: function (gulp, configuration) {
      return gulp.src(configuration.image.sprity.dest + '/**/*.scss')
            .pipe(sourceMaps.init())
            .pipe(concat('sprity.scss'))
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest(configuration.style.path.src.sass+'/sprity'))
        
    }
}

