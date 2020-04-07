const { src, dest, watch } = require('gulp');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

function html() {
  return src('src/index.pug')
    .pipe(pug())
    .pipe(dest('build/'));
}

function css() {
  return src('src/style.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(minifyCSS())
    .pipe(concat('style.css'))
    .pipe(dest('build/'));
}

function js() {
  return src('src/scripts.js')
    .pipe(
      minify({
        ext: {
          min: '.js',
        },
        noSource: true,
      })
    )
    .pipe(dest('build/'));
}

exports.html = html;
exports.css = css;
exports.js = js;

exports.default = function() {
  watch('./src/*.pug', { ignoreInitial: false }, html);
  watch('./src/*.scss', { ignoreInitial: false }, css);
  watch('./src/scripts.js', { ignoreInitial: false }, js);
};
