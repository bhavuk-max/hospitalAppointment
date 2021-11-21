<?php


header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");


if($_SERVER['REQUEST_METHOD'] == 'POST'){


 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $Patient_ID = $_POST["Patient_ID"];
 $category = $_POST["category"];
 $Doctor_ID = $_POST["send_doc"];
 $send_date = $_POST["send_date"];
 $send_time = $_POST["send_time"];
 $doctorFees = $_POST["doctorFees"];

 require_once 'db.php';

  //  $sql = "INSERT INTO bookappointment (category,avail_doc,Date,Time,MobileNo)
  //  VALUES ('$category','$send_doc','$send_date','$send_time','$send_mobile')";
  $sql = "INSERT INTO bookappointment (Patient_ID,Doctor_ID,Category,Date,Time,Fees) VALUES('$Patient_ID','$Doctor_ID','$category','$send_date','$send_time','$doctorFees')";

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