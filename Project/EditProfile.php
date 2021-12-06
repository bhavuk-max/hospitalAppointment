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
$speciality = $_POST["Speciality"];
$type = $_POST["userType"];
$qual = $_POST["Qualification"];
$fees = $_POST["Fees"];
$link = $_POST["MeetingLink"];
$ques = $_POST["SecurityQuestion"];


require_once 'db.php';

if($type == "1"){
  $sql = "
  UPDATE user SET FullName='$name',Address='$address', PhoneNo='$phone', SecurityQuestion='$ques' WHERE ID='$id';
  UPDATE doctor SET Doctor_Fee='$fees', Meeting_Link='$link', Speciality='$speciality',Qualification='$qual' WHERE ID='$id';
  ";
}
else if($type == "2"){
  $sql = "UPDATE user SET FullName='$name',Address='$address', PhoneNo='$phone', SecurityQuestion='$ques' WHERE ID='$id'";
}



if ($conn->multi_query($sql) === TRUE) {
    $data = array("Data inserted");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?>