import webpack from "webpack-stream";
import rename from 'gulp-rename';
import babel from 'gulp-babel';
import uglify from 'gulp-uglify';

export const video = () => {
  return app.gulp.src(app.path.src.video)
    .pipe(app.gulp.dest(app.path.build.video))
    .pipe(app.plugins.browserSync.stream());
}