module.exports = {
    dep: ['build'],
    fn: function (gulp, configuration) {
        //@todo watch function
        // gulp.watch(configuration.script.path.src + '/**/*.js', ['script:concat']);
        gulp.watch(
            [configuration.style.path.src.sass + '/**/*.{scss, sass}', configuration.style.path.src.css + '/**/*.css'],
            ['styles:compile']
        ).on('change', function (event) {
            configuration.onlyCSS = event.path.split('.').pop() == 'css' ;
        });
    }
}