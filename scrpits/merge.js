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

'use strict';

module.exports = function () {
    let objects = arrayList(),
        index = 0,
        lastType = undefined;

    function arrayList() {
        return Array.prototype.slice.call(arguments);
    }

    function typeOf(object) {
        return ({}).toString.call(object).slice(8, -1).toLowerCase();
    }

    function isEmptyObject(object) {
        if (object === null || object === undefined) {
            return true;
        }

        switch (typeOf(object)) {
            case 'array':
            case 'object':
                return Object.keys(object).length === 0;
            default:
                return false;
        }
    }

    function clone(source) {
        let cloned;

        if (typeOf(source) === 'array') {
            cloned = [];
            source.forEach(function (elemment, index) {
                cloned[index] = clone(elemment);
            });
        } else if (typeOf(source) === 'object') {
            cloned = {};
            for (let key in source) {
                cloned[key] = clone(source[key]);
            }
        } else {
            cloned = source;
        }

        return cloned;
    }

    function mergeObjects(obj1, obj2) {
        if (isEmptyObject(obj1)) {
            return clone(obj2);
        }

        let result = clone(obj1);
        for (let key in obj2) {
            let value = obj2[key];
            switch (typeOf(value)) {
                case 'array':
                    result[key] = mergeArrays(result[key], obj2[key]);
                    break;
                case 'object':
                    result[key] = mergeObjects(result[key], obj2[key]);
                    break;
                default:
                    result[key] = value;
            }
        }

        return result;
    }

    function mergeArrays() {
        let result = [];
        for (let i = 0; i < arguments.length; i++) {
            let element = arguments[i];
            if (Array.isArray(element)) {
                result = result.concat(element);
            } else {
                result.push(element);
            }
        }

        result.forEach(function (ele, index) {
            if (ele instanceof Object) {
                console.log('is object');
                return;
            }
            for (let i = index + 1; i < result.length; i++) {
                if (ele === result[i]) {
                    result.splice(i--, 1);
                }
            }
        });

        return result;
    }

    for (let i = 0; i < arguments.length; i++) {
        let current = arguments[i],
            currentType = typeof arguments[i];

        if (isEmptyObject(current)) {  // Skip the empty object
            continue;
        }

        if (currentType !== lastType) {   // Non object, it should be add to the array list.
            objects[index] = clone(current);
            index = index + !(current instanceof Object);
        } else if (currentType === 'array') {                        // Array concat without multiplication
            objects[index] = mergeArrays(objects[index], current);
        } else {
            objects[index] = mergeObjects(objects[index], current);
        }

        lastType = currentType;
    }

    return objects.length < 2 ? objects[0] : objects;
};