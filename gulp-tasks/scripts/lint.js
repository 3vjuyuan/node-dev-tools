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

import eslint from 'gulp-eslint';
import cached from 'gulp-cached';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src([configuration.scripts.path.src + '/**/*.js', configuration.scripts.path.applicationSrc + '/**/*.js'])
            .pipe(cached('esLint'))
            .pipe(eslint(configuration.scripts.lint))
            .pipe(eslint.format())
            .pipe(eslint.failAfterError());
    }
};
