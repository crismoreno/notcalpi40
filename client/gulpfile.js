// https://www.youtube.com/watch?v=QgMQeLymAdU
const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const minify = require('gulp-minify');
const notify = require( 'gulp-notify' );



//compile scss into css
function cssfy() {
    //1. where is my scss file
    return (
      gulp
        .src("./src/assets/styles/importer.scss")
        //2. pass that file through the sass compiler
        .pipe(sass({outputStyle: 'compressed'}))
        //3. where do I save the compiled CSS?
        .pipe(gulp.dest("./src/assets/styles/"))
        //4. stream changes to all browser
        // .pipe(browserSync.stream())
        .pipe( notify({ message: '\n\n✅  ===> STYLE — completed!\n', onLast: true }) )
    );
}


function watch() {
    // browserSync.init({
    //     server: { baseDir: "./" }
    // });
    gulp.watch("./src/assets/styles/**/*.scss", cssfy);
    gulp.watch("./src/assets/styles/**/*.scss");
}
  
exports.cssfy = cssfy;
exports.watch = watch;