// 引入头部尾部
$(function(){
    $(".Ylogo").load("share.html .Flogo", function () {
        $.getScript("js/share.js");
    });
    $(".Ynav").load("share.html .Fnav", function () {
        $.getScript("js/share.js",function(){
             showUser();
        });
    });
    $(".Yfooter").load("share.html .Ffooter", function () {
        $.getScript("js/share.js");
    });
    $(".Yfix").load("share.html .fix", function () {
        $.getScript("js/share.js");
    });
    $(".YFiconfont").load("share.html #gogo", function () {
        $.getScript("js/share.js");
    });
})

//开关
var kgbutton=document.getElementById("showcount");
var k=document.getElementById("icon-kg-k");
var g=document.getElementById("icon-kg-g");
var kaiguan=0;   //0表示开关关闭
kgbutton.onclick=function(){
    if(kaiguan==0){
        kaiguan=1;
        k.style.display="none";
        g.style.display="block";
    }else{
        kaiguan=0;
        k.style.display="block";
        g.style.display="none";
    }
}