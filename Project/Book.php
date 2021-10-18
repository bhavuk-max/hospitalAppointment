<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);
$date = $_POST["selectedDate"];
require_once 'db.php';
$sql = "INSERT INTO sample(date) VALUES('$date')";
if ($conn->query($sql) === TRUE) {

    $data = array("Data inserted");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>