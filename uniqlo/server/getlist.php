<?php
$db = mysqli_connect("127.0.0.1", "root", "root", "uniqlo");

if (!$db) {
  die('连接错误: ' . mysqli_error($db));
}

$sort = $_REQUEST["sort"];
if($sort == "default"){
      $sql = "SELECT * FROM list";
}elseif($sort == "price_asc"){
      $sql = "SELECT * FROM list Order BY price ASC";
}elseif($sort == "num_asc"){
  $sql = "SELECT * FROM list Order BY talknum DESC";
}



$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);

echo json_encode($data,true);
?>