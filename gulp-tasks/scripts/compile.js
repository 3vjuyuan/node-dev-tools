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
 * @author Team fancy <fancy@3vjuyuan.com>
 * @author Team Delta <delta@3vjuyuan.com>
 */

import gutil from 'gulp-util';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cached from 'gulp-cached';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import es from 'event-stream';

module.exports = {
    dep: ['scripts:lint'],
    fn: function (gulp, configuration) {
        return es.merge(
            gulp.src(configuration.script.path.libs),
            gulp.src(configuration.script.path.src + '/**/*.js')
                .pipe(cached('compileJs'))
                .pipe(sourcemaps.init())
                .pipe(babel())
                .on("error", function (error) {
                    gutil.log(
                        gutil.colors.red("Javascript compile error:"),
                        error.message
                    );
                })
        )
            .pipe(uglify({preserveComments: 'some'}))
            .pipe(concat('/' + configuration.script.targetName, {prefix: 99}))
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest(configuration.script.path.dest));
    }
};