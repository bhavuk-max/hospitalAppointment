<?php
 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $Doctor_ID = $_POST["Doctor_ID"];
 require_once 'db.php';
//  $sql = "SELECT ID, FullName,Address,PhoneNo FROM user";
 $sql = "SELECT bookappointment.Appointment_ID,user.FullName,user.PhoneNo,bookappointment.Date,bookappointment.Time,bookappointment.Status FROM bookappointment JOIN patient ON bookappointment.Patient_ID = patient.Patient_ID JOIN user ON patient.ID = user.ID WHERE bookappointment.Doctor_ID = '$Doctor_ID'";

 $result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();





?>