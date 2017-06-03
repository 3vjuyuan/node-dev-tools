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
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cached from 'gulp-cached';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import streamqueue from 'streamqueue';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

module.exports = {
    dep: ['scripts:lint'],
    fn: function (gulp, configuration) {
        let compiled = configuration.scripts.isModule ?
            browserify({
                entries: configuration.scripts.path.src + '/' + configuration.scripts.path.entries,
                debug: true
            })
                .transform(babelify)
                .bundle()
                .on("error", function (err) {
                    gutil.log(
                        gutil.colors.red("Browserify compile error:"),
                        err.message
                    );
                })
                .pipe(source('Site.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({loadMaps: true})) :
            gulp.src(configuration.scripts.path.src + '/**/*.js')
                .pipe(cached('compileJs'))
                .pipe(sourcemaps.init())
                .pipe(babel(configuration.scripts.babel))
                .on("error", function (error) {
                    gutil.log(
                        gutil.colors.red("Javascript compile error:"),
                        error.message
                    );
                });

        return streamqueue(
            {objectMode: true},
            gulp.src(configuration.scripts.path.libs),
            compiled
        )
            .pipe(uglify())
            .on('error', function (error) {
                gutil.log(
                    gutil.colors.red("Javascript compress error:"),
                    error.message
                );
            })
            .pipe(concat('/' + configuration.scripts.targetName, {prefix: 99}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.scripts.path.dest));
    }
};