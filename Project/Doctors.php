<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
require_once 'db.php';
$qual = $_POST["category"];
$sql = "SELECT user.FullName,doctor.Doctor_ID,doctor.Doctor_Fee from doctor JOIN user on doctor.ID = user.ID WHERE user.Qualification = '$qual'";
$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();


?>