<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$AppointmentID = $_POST["Appointment_ID"];
$status = $_POST["Status"];


require_once 'db.php';

$sql = "UPDATE bookappointment SET Status='$status'  WHERE Appointment_ID='$AppointmentID'";


if ($conn->multi_query($sql) === TRUE) {
    $data = array("Data inserted");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();




?>