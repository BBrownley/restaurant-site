require("./gulp/tasks/styles");
require("./gulp/tasks/watch");

const

gulp = require("gulp"),
watch = require("gulp-watch"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
cssVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
cssImport = require("postcss-import"),
browserSync = require("browser-sync").create();

gulp.task("default", function() {
  console.log("Hello world!");
});
