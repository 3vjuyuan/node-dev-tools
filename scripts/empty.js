/**
 * Copyright (c) 2014-present, San Wei Ju Yuan Tech Ltd. <https://www.3vjuyuan.com>
 * All rights reserved.
 *
 * This file is part of gulp-build-tools, licensed under the MIT license (MIT) found
 * in the LICENSE file in the root directory of this source tree.
 *
 * For more details:
 * https://www.3vjuyuan.com/licenses/mit.html
 *
 * @author Team fancy <fancy@3vjuyuan.com>
 * @author Team Delta <delta@3vjuyuan.com>
 */

/**
 * This function will do the same as empty() in PHP
 *
 * @param mixed input
 * @returns {boolean}
 */
module.exports = function empty(input) {
    if (input === undefined ||
        input === null ||
        input === false ||
        input === 0 ||
        input === '0' ||
        input === '') {
        return true;
    }

    // Check if the input is an object (array is also an object) with own properties.
    if ('object' === typeof input) {
        return Object.keys(input).length === 0;
    }

    return false;
}