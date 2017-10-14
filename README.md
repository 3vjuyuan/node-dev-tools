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
##### The path of JavaScript files: `path` 
* `libs` : The path of JavaScript libraries, for example jQuery `node_modules/jquery/dist/jquery.min.js`.
* `src` : The directory path to none module JavaScript codes, like ES5 codes, e.g `src/JavaScript`.
* `applicationSrc`: The base directory, in which stand the module JavaScript codes. The default value is the current
gulp running path
* `applicationEntries` : The entry file for module JavaScript codes, the value should be the relative path to the base
 path of application source path, which is set in `applicationSrc`, for example for React application 
`src/React/index.js`
* `dest` : The destination directory, where the compiled JS file should be saved

##### The target file name of the compiled JS file: `targetName` 
