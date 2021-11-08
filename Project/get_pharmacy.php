<?php


 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 

 require_once 'db.php';


$sql = "SELECT id,NAME,price FROM pharmacy";

$result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);


for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();





?>