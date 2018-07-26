// 安装依赖
var gulp = require("gulp");//引入本地安装的 gulp模块
var spritesmith = require("gulp.spritesmith");
var browserSync = require("browser-sync");//引入 browser-sync 模块
var sass = require('gulp-sass-china');

gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});
gulp.task('sprite', function(){
	gulp.src('./icon/*.png')
		.pipe(spritesmith({
			imgName: 'sprite.png',
			cssName: '../css/sprite.css',
			padding: 5,
			algorithm: 'binary-tree'
		}))
		.pipe(gulp.dest('./images'))
});
// 设置任务---架设静态服务器
gulp.task('asd', function () {
	browserSync.init({
		files:['**'],
		server:{
			baseDir:'./', // 设置服务器的根目录
		},
		port:8050 // 指定访问服务器的端口号
	});
	gulp.watch("icon/*.png", ['sprite']);
	gulp.watch("sass/*.scss", ['sass']);
	gulp.watch("*.html").on('change', browserSync.reload);
});