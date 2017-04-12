module.exports = {
    dep: ['build'],
    fn: function (gulp,configuration) {
        //@todo watch function
        gulp.watch(configuration.script.path.src+'*.js',['script:concat']);
        gulp.watch([configuration.styles.path.src+'**/*.sass'],['styles:minify']);
    }
}