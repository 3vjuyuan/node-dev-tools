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

import cached from 'gulp-cached';
import sassLint from 'gulp-sass-lint';

module.exports = {
    fn: function (gulp, configuration) {
        return gulp.src(configuration.style.path.src.sass + '/**/*.{scss, sass}')
            .pipe(cached('sassLint'))
            .pipe(sassLint({
                rules:{
                    'bem-depth':[{'max-depth':2}],
                    'class-name-format':[{'allow-leading-underscore':false},{'convention':'hyphenatedbem'}],
                    'mixins-before-declarations':[1,{'exclude':['tablet','desktop']}],
                    'force-attribute-nesting':0,
                    'force-element-nesting':0,
                    'force-pseudo-nesting':0,
                    'no-attribute-selectors':1,
                    'no-ids':0,
                    'no-qualifying-elements':0,
                    'no-universal-selectors':1,
                    'property-sort-order':[1,{'order':'concentric'}]
                },
                configFile: configuration.style.path.lint
            }))
            .pipe(sassLint.format())
            .pipe(sassLint.failOnError());
    }
};