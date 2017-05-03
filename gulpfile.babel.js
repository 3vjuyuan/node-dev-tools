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

import fs from 'fs';
import yaml from 'js-yaml';
import gulpRequireTasks from 'gulp-require-tasks';
import merge from './scripts/merge';

let configuration = merge(
    yaml.load(fs.readFileSync('default.yml', 'utf8')),
    yaml.load(fs.readFileSync('UserProject/config.yml', 'utf8')),
);


for (let i in configuration.tasks.path) {
    gulpRequireTasks({
        path: process.cwd() + "/" + configuration.tasks.path[i],
        arguments: [configuration]
    })
}