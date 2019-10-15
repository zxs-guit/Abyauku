<?php
    header("Content-type:text/html;charset=utf-8");
    $username=$_POST['username'];
    $userpass=$_POST['password'];

    $conn=mysql_connect("localhost","root","root");
    if(!$conn){
        echo("数据库出错".mysql_error());
    }else{
        mysql_select_db("mydb1908",$conn);
        $sqlstr="select * from abyau where username='$username'";//查询该用户名在数据库中有没有。 
        $result = mysql_query($sqlstr,$conn);
        $rows = mysql_num_rows($result);//获得结果的行数
        if($rows>0){
            mysql_close($conn);
            echo "-1";  //用户名被使用
        }
        else{
            $sqlstr="insert into abyau(username,userpass) values('$username','$userpass')";
            $result = mysql_query( $sqlstr,$conn);
            //4)、关闭数据库
            mysql_close($conn);
             //3、响应
            if($result!=1){
                echo "0";  //注册失败
            }else{
                echo "1";  //注册成功
            }
        }
    }
?>