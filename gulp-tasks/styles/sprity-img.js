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

import gulpif from 'gulp-if';
import sprity from 'sprity';
import fs from 'fs';
import path from 'path';

module.exports = {
    fn: function (gulp, configuration) {
        var dir = configuration.image.path.src;
        var filesArr = [];
        (function getAllFiles(root) {
            var extArr =['png','jpg','gif'];
            var files = fs.readdirSync(root);
            for(let i=0;i<files.length;i++){
                var pathname = root+'/'+files[i],
                    stat = fs.lstatSync(pathname);
                if(!stat.isDirectory()){
                    if (extArr.indexOf(pathname.substr(pathname.length - 3))!=-1) {
                        filesArr.push(pathname)
                        return true;
                    }
                }else{
                    getAllFiles(pathname);
                }
            }
        })(dir)

       if(filesArr.length>0){
           return sprity.src(configuration.image.sprity)
               .on('error', function (err) {
                   console.log(err.toString());
               })
               .pipe(gulpif('*.png', gulp.dest(configuration.image.path.dest),
                   gulp.dest(configuration.image.sprity.dest)))
       }else{
           if(mkdirsSync(configuration.image.sprity.dest,'0o777')){
                fs.writeFile(configuration.image.sprity.dest+'/sprity.scss','',function (err) {
                   if(err){
                       return console.log(err);
                   }
               })
               return gulp.src(configuration.image.sprity.dest+'/sprity.scss')
                   .pipe(gulp.dest(configuration.image.sprity.dest))
           }

       }

        function mkdirsSync(dirpath, mode) {
            if (!fs.existsSync(dirpath)) {
                var pathtmp;
                dirpath.split(path.sep).forEach(function(dirname) {
                    if (pathtmp) {
                        pathtmp = path.join(pathtmp, dirname);
                    }
                    else {
                        pathtmp = dirname;
                    }
                    if (!fs.existsSync(pathtmp)) {
                        if (!fs.mkdirSync(pathtmp, mode)) {
                            return false;
                        }
                    }
                });
            }
            return true;
        }
    }
};