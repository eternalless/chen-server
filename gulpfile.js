const gulp = require('gulp')
const babel = require('gulp-babel')
const watch = require('gulp-watch');

// 生产环境
gulp.task('buliddev', () => {
    return watch('./src/nodeuii/**/*.js',//监听src/nodeuii所有的js
      { ignoreInitial: false },
      () => {
         gulp.src('./src/nodeuii/**/*.js')//编译此文件
            .pipe(babel({
                babelrc: false,
                "plugins": ["transform-es2015-modules-commonjs"]
            }))
            .pipe(gulp.dest('dist'));//输出到dist中
    })
});
let _task = ['buliddev']
if(process.env.NODE_ENV == 'production') {
    _task = [];
}
gulp.task('default', _task)