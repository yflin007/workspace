<?php
/**
 * Created by PhpStorm.
 * User: ijeff
 * Date: 17/6/26
 * Time: 下午1:42
 */

//username : 用户名
//pwd : 密码
//age : 年龄
header('Access-Control-Allow-Origin: *');
//获取前端提交过来的参数
$pwd = $_POST["pwd"];
$tel = $_POST["tel"];
$retel= $_POST["retel"];
//echo $username.$pwd.$age;
class Res {
    public  $status;
    public  $msg;
}

//注册
$conn = new mysqli("127.0.0.1", "root", "", "mydata") or die("连接失败");
$sql = "select * from user where tel='$tel'";
$result = $conn->query($sql);
if ($result && $result->num_rows > 0){
    //存在相同用户
    $res = new Res();
    $res->status = 0;
    $res->msg = "该用户已存在";
    echo  json_encode($res);
}
else {
    //不存在相同用户

    //插入数据
    $sql = "insert into user(password,tel,retel) values('$pwd','$tel','$retel')";
    $result =  $conn->query($sql);
    if ($result) {
        $res = new Res();
        $res->status = 1;
        $res->msg = "注册成功！点击确认即可跳到登录页";
        echo  json_encode($res);
    }
    else {
        $res = new Res();
        $res->status = 2;
        $res->msg = "注册失败";
        echo  json_encode($res);
    }
    $conn->close();
}

























