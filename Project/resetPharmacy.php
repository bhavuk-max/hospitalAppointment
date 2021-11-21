<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");



 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $Patient_ID=$_POST["Patient_ID"];

 require_once 'db.php';


 $sql = "DELETE FROM cart WHERE Patient_ID='$Patient_ID'";

// $result = mysqli_query($conn,$sql);
if ($conn->query($sql) === TRUE) {
   
    $data = array("Data inserted");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}






?>