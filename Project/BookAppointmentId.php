<?php
 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);

 require_once 'db.php';
 $id = $_POST["userId"];
 $type = $_POST["userType"];
 $FirstLogin = $_POST["FirstLogin"];
 if($type === '1'){
    $sql = "
    INSERT INTO doctor (ID) VALUES('$id');
    UPDATE user SET First_login = 1 WHERE ID = '$id';
    ";
 }
 else if($type === '2'){
    $sql = "
    INSERT INTO patient (ID) VALUES('$id');
    UPDATE user SET First_login = 1 WHERE ID = '$id';
    ";
 }
 
 if ($conn->multi_query($sql) === TRUE) {
   $data = array("Data inserted");
 echo json_encode($data);
}   
else {
echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();



?>