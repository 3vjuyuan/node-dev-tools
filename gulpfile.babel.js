import fs from 'fs';
import yaml from 'js-yaml';
import gulpRequireTasks from 'gulp-require-tasks';

let configuration  = yaml.load(
            fs.readFileSync('config.yml', 'utf8')
        );

gulpRequireTasks({
    path: process.cwd()+"/"+configuration.tasks.path,
    arguments: [configuration]
});
