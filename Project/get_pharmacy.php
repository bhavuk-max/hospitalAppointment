<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");



 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $Patient_ID=$_POST["Patient_ID"];

 require_once 'db.php';


$sql = "SELECT ID_Pharmacy,NAME,price,quantity FROM cart where Patient_ID='$Patient_ID'";

// $result = mysqli_query($conn,$sql);
$result = $conn->query($sql) or die($conn->error);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();





?>