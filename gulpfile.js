var gulp = require("gulp");


gulp.task("copy-html",async function(){
	gulp.src("index.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew"));
});

gulp.task('copyallfile',async function(){
	gulp.src('./**/*')
	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Abyaunew'));
});

//定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝
gulp.task("watchall",async ()=>{
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew"));
	});
	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\js"));
	});
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\css"));
	});
});