import imagemin from 'gulp-imagemin';

module.exports = {
    fn:function (gulp,configuration) {
        return gulp.src(configuration.image.path.src+"/*.{png,jpg,gif,ico}")
            .pipe(imagemin({
                optimizationLevel:5,
                interlaced: true,
                progressive: true,
                multipass: true 
            }))
            .pipe(gulp.dest(configuration.image.path.dest))
    }
}

