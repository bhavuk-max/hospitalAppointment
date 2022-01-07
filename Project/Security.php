<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$email = $_POST["Email"];
$SecurityQuestion = $_POST["SecurityQuestion"];
require_once 'db.php';
$sql="SELECT Email,SecurityQuestion FROM user WHERE Email='$email' AND SecurityQuestion='$SecurityQuestion'";
$result = $conn->query($sql);
if($result->num_rows == 0) {
     echo "Incorrect";
} else {
    echo "Correct";
}





// if ($conn->multi_query($sql) === TRUE) {
//     $data = array("Email Found");
//   echo json_encode($data);
// }   
// else {
// echo "Error: " . $sql . "<br>" . $conn->error;
// }

$conn->close();




?>