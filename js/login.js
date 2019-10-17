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

// 表单验证
var btnLogin=document.getElementById("btnLogin");
var username=document.getElementById("username");
var password=document.getElementById("password");

btnLogin.onclick=function(){
    let xhr=new XMLHttpRequest();
    xhr.open("post","php/loginSave.php",true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && xhr.status==200){
            if(xhr.responseText=="-1"){
                alert("用户名不存在，请注册");
            }
            else if(xhr.responseText=="0"){
                alert("用户名或密码不正确");
            }
            else if(xhr.responseText=="1"){
                //添加cookie
                addCookie("username",username.value,7);  //保存7天
                location.href="index.html";
            }
        }
    }
    //post方式:设置请求头
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //post方式：把传给服务器端的数据（键值对）放在send函数里
    let sendstr = `username=${username.value}&password=${password.value}`;
    xhr.send(sendstr);
}