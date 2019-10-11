// 光标聚集
function show(){
    document.getElementById("sys").focus();
}
// 顶部悬浮
window.onscroll = function(){
    var Fnav = document.getElementById("Fnav");
    var boxTop = document.documentElement.scrollTop || document.body.scrollTop;
    if(boxTop>=80){
        Fnav.style.position = "fixed";
        Fnav.style.top = 0;
    }
    else{
        Fnav.style.position = "absolute";
        Fnav.style.top = "80px";
    }
}

// $(".wechat").mouseenter(function(){
//     $(".wechat").css({
//         "display":"none"
//     });
//     $(".wechatkf").css({
//         "display":"block"
//     });
//     $(".kf").css({
//         "display":"block"
//     });
// })