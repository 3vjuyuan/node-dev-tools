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

import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import gulputil from 'gulp-util';
import prefix from 'gulp-autoprefixer';
import gulpif from 'gulp-if';
import concat from 'gulp-concat';
import minify from 'gulp-clean-css';
import streamqueue from 'streamqueue';

module.exports = {
    dep: ['styles:lint'],
    fn: function (gulp, configuration) {
        let sassCompiler = gulp.src(configuration.styles.path.src.sass + '/**/*.{scss, sass}')
            .pipe(sourcemaps.init())
            .pipe(gulpif(
                configuration.onlyCSS !== true,
                sass({
                    outputStyle: 'compressed',
                    includePaths:
                        configuration.styles.path.vendors === undefined || configuration.styles.path.vendors.length == 0 ?
                            "node_modules" : configuration.styles.path.vendors
                }).on('error', gulputil.log)
            ))
            .pipe(gulpif(
                configuration.onlyCSS !== true,
                gulp.dest(configuration.styles.path.compiled),
                gulp.src(configuration.styles.path.compiled + '/**/*.css')
            ));

        configuration.onlyCSS = false;
        return streamqueue(
            {objectMode: true},
            sassCompiler,
            gulp.src(configuration.styles.path.src.css + '/**/*.css')
        )
            .pipe(minify())
            .pipe(prefix({
                browsers: [configuration.styles.autoprefix.browser],
                env: configuration.styles.autoprefix.env
            }))
            .pipe(concat('app.min.css'))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.styles.path.dest));
    }
};
