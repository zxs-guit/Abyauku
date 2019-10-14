// 引入头部尾部
$(function(){
    $(".Ylogo").load("share.html .Flogo", function () {
        $.getScript("js/share.js");
    });
    $(".Ynav").load("share.html .Fnav", function () {
        $.getScript("js/share.js");
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
$("#btnReg").onclick=function(){
    if($("#username").value=="" || $("#password").value=="" || $("#checkpassword").value==""){
        alert("亲，请把带星号的都输入了");
        return false;//阻止浏览器的默认行为
    }
    else{
        let xhr= new XMLHttpRequest();
        xhr.open("post","../php/regSave.php",true);

        xhr.onreadystatechange=function(){
            if(xhr.readyState==4 && xhr.status==200){
                if(xhr.responseText=="-1"){
                    $("#tishi").style.color="red";
                    $("#tishi").innerHTML="用户名已存在";
                }
                else if(xhr.responseText=="0"){
                    $("#tishi").style.color="red";
                    $("#tishi").innerHTML="注册失败";
                }
                else if(xhr.responseText=="1"){
                    $("#tishi").style.color="green";
                    $("#tishi").innerHTML="注册成功，请<a href='login.html'>登录</a>";
                }
            }
        }
        //post方式:设置请求头
        xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        //post方式：把传给服务器端的数据（键值对）放在send函数里
        let sendstr = `username=${$("#username").value}&password=${$("#password").value}`;
        xhr.send(sendstr);
    }
}
    
//检查用户名是否存在
function checkuser(obj){
    let xhr=new XMLHttpRequest();
    xhr.open("get","../php/checkuser.php?username="+$("#username").value,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState==4 && status==200){
            obj.nextElementSibling.innerHTML=xhr.responseText;
        }
    }
    xhr.send();
}

function $(str){
    if(str.charAt(0)=="#"){
        return document.getElementById(str.substring(1));
    }else if(str.charAt(0)=="."){
        return document.getElementsByClassName(str.substring(1));
    }else{
        return document.getElementsByTagName(str);
    }
}

// 判断密码是否一致
function testP(){
    var passW=$("#password").value==$("#checkpassword").value;
    if(passW){
        return true;
    }else{
        alert("两次密码不一致，请重新输入");
    }
}