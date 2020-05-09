// https://www.youtube.com/watch?v=QgMQeLymAdU
const gulp = require("gulp");
const sass = require("gulp-sass");
// const browserSync = require("browser-sync").create();
// const minify = require("gulp-minify");
const notify = require("gulp-notify");
const sourcemaps = require("gulp-sourcemaps");

function cssfy() {
  // gulp.task("cssfy", function() {
  return (
    gulp
      //   //1. where is my scss file
      .src("./src/assets/styles/importer.scss")
      .pipe(sourcemaps.init())
      //       //2. pass that file through the sass compiler
      .pipe(sass().on("error", sass.logError))
      .pipe(sourcemaps.write())
      //       //3. where do I save the compiled CSS?
      .pipe(gulp.dest("./src/assets/styles/"))
      .pipe(
        notify({ message: "\n\n✅  ===> STYLE — completed!\n", onLast: true })
      )
  );
  // });
}

function watch() {
  // browserSync.init({
  //     server: { baseDir: "./" }
  // });
  gulp.watch("./src/assets/styles/**/*.scss", cssfy);
  // gulp.watch("./src/assets/styles/**/*.scss");
}

exports.cssfy = cssfy;
exports.watch = watch;
