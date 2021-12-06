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
  $sql = "SELECT user.FullName,user.Address,user.PhoneNo,user.SecurityQuestion,doctor.Qualification,doctor.Speciality,doctor.Doctor_Fee,doctor.Meeting_Link FROM user JOIN doctor ON user.ID = doctor.ID WHERE user.ID='$id'";
}
else if($type == "2"){
  $sql = "SELECT user.FullName,user.Address,user.PhoneNo FROM user WHERE user.ID = '$id'";
}



$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);
$conn->close();




?>