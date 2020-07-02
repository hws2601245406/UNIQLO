<?php
$db = mysqli_connect("127.0.0.1", "root", "root", "uniqlo");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}
$sql = "SELECT * FROM list";

$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data,true);
?>