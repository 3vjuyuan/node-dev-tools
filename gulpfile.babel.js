import fs from 'fs';
import yaml from 'js-yaml';
import gulpRequireTasks from 'gulp-require-tasks';
import connect from 'gulp-connect';

let configuration = yaml.load(
    fs.readFile('config.yml', 'utf8', (err, data) => {
        if (err)
            throw err;
    })
);

gulpRequireTasks({
    path: process.cwd() + "/" + configuration.tasks.path,
    arguments: [configuration, connect]
});
