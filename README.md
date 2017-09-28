# Frontend development gulp task bundles tool

This project is build to provide a tool, which bundles of frontend development gulp tasks.

## Configurations
This tool has some default configurations and is saved in `default.yml`. But it is also designed to be configurable by
using YAML file, which must be named as `project.yml`. All the default configuration can be overwritten in the
`project.yml`.

### JavaScript tasks configuration
This tool provides a JavaScript building process, including transform the ES6 and React to ES5, linting, contacting,
minify and modernizr.

The JavaScript building process accept three types code: `libaries`, `none module codes`, `ES6/React module codes`.
The configuration is under `scripts`. It has the following settings:
1. `path` : The path of JavaScript files
* `libs` : The path of JavaScript libraries, for example jQuery `node_modules/jquery/dist/jquery.min.js`.
* `src` : The directory path to none module JavaScript codes, like ES5 codes, e.g `src/JavaScript`.
* `applicationEntries` : The entry file for module JavaScript codes, for example for React application 
`src/React/index.js`
* `dest` : The destination directory, where the compiled JS file should be saved

2. `targetName`: The target file name of the compiled JS file
