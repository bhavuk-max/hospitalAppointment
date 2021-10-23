<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");


if($_SERVER['REQUEST_METHOD'] == 'POST'){




 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $category = $_POST["send"];
 $send_doc = $_POST["send_doc"];
 $send_date = $_POST["send_date"];
 $send_time = $_POST["send_time"];
 $send_mobile=$_POST["send_mobile_no"];
   
   require_once 'DBase.php';

   // if(uidExists($conn,$email) !== false){
     


   // }
 


   $sql = "INSERT INTO bookappointment (category,avail_doc,Date,Time,MobileNo)
   VALUES ('$category','$send_doc','$send_date','$send_time','$send_mobile')";

   if ($conn->query($sql) === TRUE) {

       $data = array("Data inserted");
     echo json_encode($data);
}   
   else {
 echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
}


?>