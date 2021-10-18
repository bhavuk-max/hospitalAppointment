<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$address = $_POST["Address"];
$phone = $_POST["phoneNumber"];
$id = $_POST["ID"];
$name = $_POST["FullName"];
$qual = $_POST["Qualification"];
$type = $_POST["userType"];

require_once 'db.php';
// $getInfo = "SELECT ProfileCompleted from doctor WHERE ID='$id' ";
// $query = mysql_query($getInfo, $conn);
// $row = mysql_fetch_array($query);
// $profile = $row['ProfileCompleted'];

// if($type == "1"){
//   $sql = "UPDATE user SET Address='$address', PhoneNo='$phone' WHERE ID='$id';
//   INSERT INTO doctor (ID) VALUES ('$id');";
  
// }
// else if($type == "2"){
//   $sql = "UPDATE user SET Address='$address', PhoneNo='$phone' WHERE ID='$id';
//   INSERT INTO patient (ID) VALUES ('$id');";
// }
$sql = "UPDATE user SET Address='$address', PhoneNo='$phone' WHERE ID='$id'";


if ($conn->multi_query($sql) === TRUE) {
    $data = array("Data inserted");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?>