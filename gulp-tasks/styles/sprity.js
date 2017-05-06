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

import concat from 'gulp-concat';
import sourceMaps from 'gulp-sourcemaps';

module.exports = {
    dep: ['styles:sprity-svg', 'styles:sprity-img'],
    fn: function (gulp, configuration) {
        return gulp.src(configuration.image.sprity.dest + '/**/*.scss')
            .pipe(sourceMaps.init())
            .pipe(concat('sprity.scss'))
            .pipe(sourceMaps.write('./'))
            .pipe(gulp.dest(configuration.style.path.src.sass + '/sprity'));

    }
};