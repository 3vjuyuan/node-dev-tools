import imagemin from 'gulp-imagemin';

module.exports = {
    fn:function (gulp,configuration) {
        return gulp.src(configuration.image.path.src+"/*.{png,jpg,gif,ico}")
            .pipe(imagemin({
                optimizationLevel:5, //类型：Number  默认：3  取值范围：0-7(优化等级)
                interlaced: true, //类型：Boolean 默认：false 无损压缩jpg图片
                progressive: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
                multipass: true //类型：Boolean 默认：false 多次优化svg直到完全优化
            }))
            .pipe(gulp.dest(configuration.image.path.dest))
    }
}

