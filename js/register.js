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
var btnReg=document.getElementById("btnReg");
var username=document.getElementById("username");
var password=document.getElementById("password");
var checkpassword=document.getElementById("checkpassword");
// var tishi=document.getElementById("tishi");
btnReg.onclick=function(){
    if(username.value=="" || password.value=="" || checkpassword.value==""){
        alert("未全部填写，请填写完整");
        return false;//阻止浏览器的默认行为
    }
    else{
        let xhr= new XMLHttpRequest();
        xhr.open("post","php/regSave.php",true);

        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                if(xhr.responseText=="-1"){
                    // tishi.style.color="red";
                    // tishi.innerHTML="用户名已存在";
                    alert("用户名已存在");
                }
                else if(xhr.responseText=="0"){
                    // tishi.style.color="red";
                    // tishi.innerHTML="注册失败";
                    alert("注册失败");
                }
                else if(xhr.responseText=="1"){
                    // tishi.style.color="green";
                    // tishi.innerHTML="注册成功，请<a href='login.html'>登录</a>";
                    location.href="login.html";  
                }
            }
        }
        //post方式:设置请求头
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //post方式：把传给服务器端的数据（键值对）放在send函数里
        let sendstr = `username=${username.value}&password=${password.value}`;
        xhr.send(sendstr);
    }
}
//检查用户名是否存在
function checkuser(obj){
    let xhr=new XMLHttpRequest();
    xhr.open("get","php/checkuser.php?username="+$("#username").value,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && status==200){
            obj.nextElementSibling.innerHTML=xhr.responseText;
        }
    }
    xhr.send();
}
// 判断密码是否一致
function testP(){
    var passW=password.value==checkpassword.value;
    if(passW){
        return true;
    }else{
        alert("两次密码不一致，请重新输入");
    }
}

// // 保存cookie
// var welcomeBox=document.getElementById("welcomeBox");
// var nav2=document.getElementById("nav2");
// var btnLogout=document.getElementById("btnLogout");
// function showUser(){
//     let username=getCookie("username");
//     if(username!=null){
//         welcomeBox.firstElementChild.innerHTML = username;
//         welcomeBox.style.display ="block";
//         nav2.style.display ="none";
//     }else{
//         welcomeBox.style.display ="none";
//         nav2.style.display ="block";
//     }
// }

    
//     btnLogout.onclick=function(){
//         removeCookie("username");
//         showUser();
// }