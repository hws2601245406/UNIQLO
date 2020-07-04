<?php

$db = mysqli_connect("127.0.0.1", "root", "root", "uniqlo");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}

$good_id = $_REQUEST["good_id"];
$user_id = $_REQUEST["user_id"];
$good_num = $_REQUEST["good_num"];
$good_color = $_REQUEST["good_color"];
$good_size = $_REQUEST["good_size"];

$sql = "SELECT * FROM cart WHERE goods_id = $good_id AND (user_id = $user_id) and (good_size = '$good_size') AND (good_color = '$good_color') " ;

// echo $sql;
$result = mysqli_query($db,$sql);
$num = mysqli_num_rows($result);
// echo $num;
if($num == 0){
    echo "0";
    $sql = "INSERT INTO cart " .
      "(cart_id,goods_id,user_id,num,good_size,good_color)" .
      "VALUES " .
      "(NULL,$good_id,$user_id,$good_num,'$good_size','$good_color')";
  
}elseif($num == 1){
    echo "1";
    $sql = "UPDATE cart SET num = num + $good_num WHERE goods_id = $good_id AND user_id = $user_id AND good_size = '$good_size' AND good_color = '$good_color'";
}

$retval = mysqli_query($db,$sql);

if (!$retval) {
    // die('添加到购物车失败');
    die('添加到购物车失败: ' . mysqli_error($db));

}
echo "添加成功";
  



?>