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

import imagemin from 'gulp-imagemin';
import imageminSvg from'imagemin-svgo';
import imageminPng from 'imagemin-optipng';
import imageminJpeg from 'imagemin-jpegtran';
import gulpUtil from 'gulp-util';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src([configuration.image.path.src + "/*.{png,jpg,gif,svg}"])
            .pipe(imagemin([
                    imageminPng(),
                    imageminJpeg({progressive: true}),
                    imageminSvg({plugins: [{removeViewBox: false}]})
                ]).on('error', gulpUtil.log)
            )
            .pipe(gulp.dest(configuration.image.path.dest))
    }
};

