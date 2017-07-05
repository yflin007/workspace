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

//echo $username.$pwd.$age;
class Res {
    public  $status;
    public  $msg;
}

//注册
$conn = new mysqli("127.0.0.1", "root", "", "mydata") or die("连接失败");
/*$sql = "select password from user where tel='$tel'";*/
$sql = "select * from user where tel='$tel' and password='$pwd'";
$result = $conn->query($sql);
if ($result && $result->num_rows > 0){
    //存在相同用户
    $res = new Res();
    $res->status = 1;
    $res->msg = "登录成功";
    echo  json_encode($res);
}
else {
    //不存在相同用户

        $res = new Res();
        $res->status = 0;
        $res->msg = "输入的用户名或者密码错误";
        echo  json_encode($res);
  
    $conn->close();
}

























