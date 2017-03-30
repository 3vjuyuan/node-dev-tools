import sass from 'gulp-sass';
import concat from 'gulp-concat';
import csslint from 'gulp-csslint';

module.exports = {
    fn :function(gulp,configration){
        return gulp.src(configration.style.path.src+'/*.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(csslint())
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest(configration.style.path.dest))
    }
}