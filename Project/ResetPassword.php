<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$email = $_POST["Email"];
$pass = $_POST["Password"];
$confirmPass = $_POST["ConfirmPassword"];


require_once 'db.php';
// if($pass == $confirmPass){
    
// }
$sql="UPDATE user SET Password='$pass' WHERE Email='$email'";

if ($conn->multi_query($sql) === TRUE) {
    $data = array("Password Changed");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?>