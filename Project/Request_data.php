<?php


 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 
 
 require_once 'DBase.php';

 //$sql="SELECT category,avail_doc,Date,Time FROM bookAppointment ";
 $sql="SELECT category,avail_doc,Date,Time FROM bookAppointment order by ID DESC LIMIT 1";




for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();





?>
