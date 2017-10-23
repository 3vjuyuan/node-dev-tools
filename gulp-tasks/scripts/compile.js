/**
 * Copyright (c) 2014-present, San Wei Ju Yuan Tech Ltd. <https://www.3vjuyuan.com>
 * All rights reserved.
 *
 * This file is part of node-dev-tools, licensed under the MIT license (MIT) found
 * in the LICENSE file in the root directory of this source tree.
 *
 * For more details:
 * https://www.3vjuyuan.com/licenses/mit.html
 *
 * @author Team Fancy <fancy@3vjuyuan.com>
 * @author Team Delta <delta@3vjuyuan.com>
 */

'use strict';

import gutil from 'gulp-util';
import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import cached from 'gulp-cached';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import streamqueue from 'streamqueue';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import minify from 'gulp-babel-minify';

module.exports = {
    dep: ['scripts:lint'],
    fn: function (gulp, configuration) {
        let handelError = (error) => {
                gutil.log(
                    gutil.colors.red("Error during Javascript building:"),
                    error.message
                );
            },
            streams = [{objectMode: true}];

        if(configuration.scripts.path.libs !== undefined && configuration.scripts.path.libs) {
            let libraries = gulp.src(configuration.scripts.path.libs)
                .pipe(plumber({errorHandler: handelError}));
            streams.push(libraries);
        }

        if(configuration.scripts.path.src !== undefined && configuration.scripts.path.src) {
            let noneModuleScripts = gulp.src(configuration.scripts.path.src + '/**/*.js')
                .pipe(plumber({errorHandler: handelError}))
                .pipe(cached('compileJs'))
                .pipe(sourcemaps.init())
                .pipe(babel(configuration.scripts.babel));
            streams.push(noneModuleScripts);
        }

        if (configuration.scripts.path.applicationEntries !== undefined &&
            configuration.scripts.path.applicationEntries &&
            configuration.scripts.path.applicationSrc !== undefined &&
            configuration.scripts.path.applicationSrc
        ) {
            let moduleApplication = browserify({
                entries: configuration.scripts.path.applicationSrc + '/' + configuration.scripts.path.applicationEntries,
                debug: true
            })
                .transform(babelify.configure(configuration.scripts.babel))
                .bundle()
                .on("error", function (err) {
                    gutil.log(
                        gutil.colors.red("Browserify compile error:"),
                        err.message
                    );
                })
                .pipe(source('ModuleApplication.js'))
                .pipe(buffer());
            streams.push(moduleApplication);
        }

        return streamqueue.apply(null, streams)
            .pipe(plumber({errorHandler: handelError}))
            .pipe(minify(configuration.scripts.minify))
            .pipe(concat(configuration.scripts.targetName, {prefix: 99}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.scripts.path.dest));
    }
};
