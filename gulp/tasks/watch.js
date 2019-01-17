const gulp = require('gulp');
const watch = require("gulp-watch");
const browserSync = require("browser-sync");
const connect = require("gulp-connect-php");

gulp.task("watch", function() {

  connect.server({}, function (){
    browserSync({
      proxy: '127.0.0.1:8000',
      base: "app",
      keepalive: true,
      browser: ["chrome.exe"]
    });
  });

  gulp.watch('**/*.php').on('change', function () {
    browserSync.reload();
  });

  watch("./app/index.html", function() {
    //look for saved changes in index.html and use the reload method
    browserSync.reload();
  });
  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });

});

gulp.task("cssInject", ["styles"] ,function() {

  /*In this case, the second argument must be run first before anything else
  */

  return gulp.src("./app/temp/styles/styles.css")
    .pipe(browserSync.stream());
});
