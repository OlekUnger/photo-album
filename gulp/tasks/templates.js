'use strict';

module.exports = function() {
  $.gulp.task('templates', function() {
    return $.gulp.src('./source/templates/***/**/*.*')
      .pipe($.gulp.dest($.config.root + '/assets/templates'));
  });
};