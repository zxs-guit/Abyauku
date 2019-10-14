<?php
    header("Content-type:text/html;charset=utf-8");
    $username=$_GET['username'];   //接收前端的数据
    $conn=mysql_connect("localhost","root","root");  //连接数据库
    if(!$conn){
        echo("数据库出错".mysql_error());
    }
    else{
        mysql_select_db("mydb1908",$conn);   //选择数据库
        // 执行SQL语句
        // (1)查询用户名在数据库中有没有，取得结果的行数
        $sqlstr="select * from abyau where username='$username'";
        $result=mysql_query($sqlstr,$conn);
        $rows=mysql_num_rows($result);

        mysql_close($conn);

        if($rows>0){
            echo "该用户已存在";
        }
        else{
            echo "该用户名未被使用，请继续填写";
        }
    }
?>