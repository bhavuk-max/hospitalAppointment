<?php
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

require_once 'db.php';
$id = $_POST["userId"];
$type = $_POST["userType"];
if($type === '1'){
    $sql = "SELECT * FROM doctor WHERE ID = '$id'";
}
else if($type === '2'){
    $sql = "SELECT * FROM patient WHERE ID = '$id'";
}
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result) == 1)
{
    for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);
}
else{
    $flag = false;
    echo json_encode($flag);
}

$conn->close();





?>