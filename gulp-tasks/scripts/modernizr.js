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

import modernizr from 'gulp-modernizr';
import uglify from 'gulp-uglify';

module.exports = {
    dep: ['scripts:compile'],
    fn: function (gulp, configuration) {
        return gulp.src([
            configuration.style.path.src.css + '/**/*.css',
            configuration.style.path.src.sass + '/**/*.{scss, sass}',
            configuration.script.path.src + '/**/*.js'
        ])
            .pipe(modernizr())
            .pipe(uglify({preserveComments: 'some'}))
            .pipe(gulp.dest(configuration.script.path.dest))
    }
};