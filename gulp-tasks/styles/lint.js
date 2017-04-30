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

import cached from 'gulp-cached';
import sassLint from 'gulp-sass-lint';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src(configuration.style.path.src + '/**/*.scss')
            .pipe(cached('sassLint'))
            .pipe(sassLint({
                config: configuration.style.path.lint,
                endless: true
            }))
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError());
    }
};