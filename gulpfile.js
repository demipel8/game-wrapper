/**
 * Created by demi on 12/1/15.
 */
var gulp = require('gulp')
var file = require('gulp-file');

var paths = {
  modules : './src/modules/'
}

gulp.task('module', function() {
  var str = '';
  var name = process.argv[4];

  name = name[0].toUpperCase() + name.substr(1);

  file('interface.js', str, { src: true }).pipe(gulp.dest(paths.modules + name));
  file('implementation.js', str, { src: true }).pipe(gulp.dest(paths.modules + name));
  file('facade.js', str, { src: true }).pipe(gulp.dest(paths.modules + name));

  return true;
});
