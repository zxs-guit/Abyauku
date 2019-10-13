const gulp = require("gulp");
const uglify=require("gulp-uglify");
const minify=require("gulp-minify-css");
const concat=require("gulp-concat");
const sass=require("gulp-sass");

//拷贝所有项目
// gulp.task('copyallfile',async ()=>{
// 	gulp.src('./**/*')
// 	.pipe(gulp.dest('D:\\phpStudy\\WWW\\Abyaunew'));
// });

// 拷贝html
gulp.task("copy-html",async ()=>{
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew"));
});

//拷贝css
// gulp.task('copy-css', function() {
//     gulp.src('css/**/*')
//     .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\css"));
// });

// 拷贝js
// gulp.task('copy-js', function() {
//     gulp.src('js/**/*')
//     .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\js"));
// });

//拷贝img
// gulp.task("copy-img",async ()=>{
//     gulp.src("img/**/*")
//     .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\img"));
// });

// 拷贝小图标font 不用 写css变化就会跟着变
// gulp.task("copy-font",async ()=>{
//     gulp.src("font/**/*")
//     .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\font"));
// });

//定义一个监听器，监听文件是否有改变，如果有改变，则自动拷贝
gulp.task("watchall",async ()=>{

    //不用将开发目录中的所有东西都放进发布目录中,此步不需要
    // gulp.watch("./**/*",async ()=>{
    //     gulp.src("./**/*")
    //     .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew"))
    // })  

    // 监听html
	gulp.watch("*.html",async ()=>{
		gulp.src("*.html")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew"));
    });
    
    //监听并压缩js
    gulp.watch("js/*.js",async ()=>{
        gulp.src("js/*.js")
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\js"));
    })

    // //监听并压缩CSS
    // gulp.watch("css/*.css",async ()=>{
    //     gulp.src("css/*.css")
    //     .pipe(minify())
	// 	.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\css"));
    // });

    //监听图片  图片可以过去，如果要删除和重命名，需要手动删除www中的图片
    gulp.watch('img/**/*',async ()=>{
        gulp.src("img/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\img"));
    });

    // 监听sass
    //文件在本地目录产生相应的文件 发生监听，然后再在www里产生对应的文件
    gulp.watch("sass/**/*.scss",async ()=>{
        gulp.src("sass/**/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("css"))
        // .pipe(minify())
        // .pipe(gulp.dest("css"))
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\css"));  //先在本地文件中产生对应的css文件，然后再监听到www中
    });
    gulp.watch("sass/**/*.scss",async ()=>{
        gulp.src("sass/**/*.scss")
        .pipe(sass())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\css"));  //先在本地文件中产生对应的css文件，然后再监听到www中
    });
      //监听并压缩CSS
      gulp.watch("css/*.css",async ()=>{
        gulp.src("css/*.css")
        .pipe(minify())
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\Abyaunew\\css"));
    });
});