<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");



if($_SERVER['REQUEST_METHOD'] == 'POST'){


   
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $Name = $_POST["name"];
    $Price = $_POST["price"];
    // $Quantity = $_POST["quantity"];
    require_once 'db.php';
 
   
     
     $sql = "INSERT INTO pharmacy(NAME,price) VALUES('$Name','$Price')";
   
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