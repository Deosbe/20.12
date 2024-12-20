const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin')


function funcaoPadrao(callback) {
    console.log('execultanto via gulp');
    callback();
}


function comprimeImagens() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

function comprimeJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'))
}

function compilaSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./build/styles'));
}

exports.default = gulp.series(funcaoPadrao, compilaSass, comprimeImagens, comprimeJavaScript)
exports.sass = compilaSass;
exports.javascript = comprimeJavaScript;
exports.images = comprimeImagens;




