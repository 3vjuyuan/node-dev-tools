module.exports = {
    //@todo set dependencies form configuration
    fn:function (gulp,configuration) {
        gulp.start.apply(gulp,configuration.buildTask);
    }
}
