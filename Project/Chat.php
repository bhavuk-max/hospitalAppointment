<?php
 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 $chat = $_POST["Chat"];
 require_once 'db.php';
 $sql = "INSERT INTO chat (Message) VALUES ('$chat')";
 if ($conn->query($sql) === TRUE) {
    $data = array("Data inserted");
  echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();


?>