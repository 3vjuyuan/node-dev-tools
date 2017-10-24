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

module.exports = {
    fn: function (gulp, configuration) {
        let buildTask = configuration.tasks.build;
        gulp.start.apply(gulp, buildTask);
        buildTask.map((item) => {
            let getType = item.split(":")[0];
            gulp.watch(getType !== "styles" ? configuration[getType].path.watchSrc :
                [configuration.styles.path.src.sass + '/**/*.{scss, sass}', configuration.styles.path.src.css + '/**/*.css'], [item]);
        });
    }
};