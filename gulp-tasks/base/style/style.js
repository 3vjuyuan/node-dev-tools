import sass from 'gulp-sass';
import concat from 'gulp-concat';
import csslint from 'gulp-csslint';

module.exports = {
    fn :function(gulp,configuration,connect){
        return gulp.src(configuration.style.path.src+'/*.scss')
            .pipe(sass({
                outputStyle: 'compressed'
            }))
            .pipe(csslint())
            .pipe(concat('app.min.css'))
            .pipe(gulp.dest(configuration.style.path.dest))
            .pipe(connect.reload());
    }
}