var gulp = require('gulp');
var esformatter = require('gulp-esformatter');

//for definitions of formatting node names
//http://esprima.org/demo/parse.html

/**
 * format code to match with expected eslint javascript lint checking
 */
gulp.task('prettify-test', function () {

    function errorAlert(err) {
        console.log(err.toString());
        this.emit("end");
    }

    /**
     * do test directories
     */
    return gulp.src(['test/**/*.js'])
        .pipe(esformatter())
        .pipe(gulp.dest('test/')).on('error', errorAlert);
});
