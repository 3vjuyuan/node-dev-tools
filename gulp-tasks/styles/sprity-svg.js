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

import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src(configuration.image.path.src + '/**/*.svg')
            .pipe(plumber())
            .pipe(svgSprite(configuration.image.svgsprityconfig))
            .on('error', function (error) {
                console.log(error.toString());
            })
            .pipe(gulp.dest('.'))
    }
};