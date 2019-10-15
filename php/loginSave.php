<?php
    header("Content-type:text/html;charset=utf-8");

    $username=$_POST['username'];
    $userpass=$_POST['password'];

    $conn = mysql_connect("localhost","root","root");

    if(!$conn){
        echo("数据库出错".mysql_error());
    }
    else{
        mysql_select_db("mydb1908",$conn);
        $userpass=$_POST['password'];
        $sqlstr="select * from abyau where username='$username'";//查询该用户名在数据库中有没有。 
        $result = mysql_query($sqlstr,$conn);
        $rows1 = mysql_num_rows($result);//获得结果的行数
        if($rows1<1){
            mysql_close($conn);
            echo "-1";  //用户不存在，需注册
        }else{
            
            $sqlstr="select * from abyau where username='$username' and userpass='$userpass' ";//查询该用户名在数据库中有没有。 
            $result = mysql_query($sqlstr,$conn);
            $rows = mysql_num_rows($result);//获得结果的行数
            mysql_close($conn);
            if($rows!=1){
                //4)、关闭数据库
                echo "0";//登录失败
            }else{
                echo "1";//登录成功
            }
        }
    }
?>