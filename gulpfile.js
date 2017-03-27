const gulp = require('gulp');
const gulpRequireTasks = require('gulp-require-tasks');
gulpRequireTasks({
    path: process.cwd() + '/gulp-tasks'
});
gulpRequireTasks()
