import imagemin from 'gulp-imagemin';
import imageminSvg from'imagemin-svgo';
import imageminPng from 'imagemin-optipng';
import imageminJpeg from 'imagemin-jpegtran';
import gulpUtil from 'gulp-util';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src([configuration.image.path.src + "/*.{png,jpg,gif,svg}"])
            .pipe(imagemin([
                    imageminPng(),
                    imageminJpeg({progressive: true}),
                    imageminSvg({plugins: [{removeViewBox: false}]})
                ]).on('error', gulpUtil.log)
            )
            .pipe(gulp.dest(configuration.image.path.dest))
    }
}

