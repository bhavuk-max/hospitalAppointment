<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");



if($_SERVER['REQUEST_METHOD'] == 'POST'){


   
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $table = $_POST["table"];
   
    // $Price = $_POST["table"][2];
    $Patient_ID=$_POST["Patient_ID"];
    // $Quantity=$_POST["table"][3];
  
    require_once 'db.php';
   
    if(is_array($table)){
       for($i = 0; $i < count($table); $i++){
        $Name=$_POST["table"][$i]["NAME"];
        $price=$_POST["table"][$i]["price"];
        $Quantity=$_POST["table"][$i]["quantity"];
        $sql = "INSERT INTO confirmedorders(Patient_ID,Name,Quantity,Price) VALUES('$Patient_ID','$Name','$Quantity','$price')";
        mysqli_query($conn, $sql);
        
    }   
}


   
   $conn->close();
   }


?>