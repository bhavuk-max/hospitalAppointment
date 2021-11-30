<?php


 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 
 $Patient_ID = $_POST["Patient_ID"];
 require_once 'db.php';

 //$sql="SELECT category,avail_doc,Date,Time FROM bookAppointment ";
//  $sql="SELECT category,avail_doc,Date,Time FROM bookAppointment order by ID DESC LIMIT 1";
$sql = "SELECT bookappointment.Appointment_ID,user.FullName,user.PhoneNo,doctor.Speciality,bookappointment.Date,bookappointment.Time,bookappointment.Status,doctor.Meeting_Link FROM bookappointment JOIN doctor ON bookappointment.Doctor_ID = doctor.Doctor_ID JOIN user ON doctor.ID = user.ID WHERE bookappointment.Patient_ID = '$Patient_ID'";

$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();





?>