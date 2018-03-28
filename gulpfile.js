var gulp = require('gulp')
var cmd = require('node-cmd')
gulp.task('mocha', function () {
  cmd.run('mocha')
});

gulp.task('m', function () {
  cmd.run('mocha')
  gulp.watch('./test/case.json', ['mocha']); // 注意，任务列表是个数组，即使只有一个元素。
});
