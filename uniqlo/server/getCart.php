<?php

/* 1、连接数据库 */
$db = mysqli_connect("127.0.0.1", "root", "root", "uniqlo");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}

$user_id = $_REQUEST["user_id"];

/* 多表查询 */
$sql = "SELECT cart.*,list.title,list.img_src,list.price FROM cart , list WHERE cart.goods_id = list.goods_id AND user_id = $user_id";

$result = mysqli_query($db,$sql);

$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
echo json_encode($data,true);
?>