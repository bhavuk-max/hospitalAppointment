<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");



if($_SERVER['REQUEST_METHOD'] == 'POST'){


   
    $rest_json = file_get_contents("php://input");
    $_POST = json_decode($rest_json, true);
    $table = $_POST["table"];
    // $Name=$_POST["table"][1];
    // $Price = $_POST["table"][2];
    $Patient_ID=$_POST["Patient_ID"];
    // $Quantity=$_POST["table"][3];
  
    require_once 'db.php';
    
    if(is_array($table)){
        foreach ($table as $row) {
            $Name = mysqli_real_escape_string($conn, $row[1]);
            $Price = mysqli_real_escape_string($conn, $row[2]);
            $Quantity = mysqli_real_escape_string($conn, $row[3]);

            $query = "INSERT INTO confirmedorders(Patient_ID,NAME,quantity,price) VALUES('$Patient_ID','$Name','$Quantity','$Price')";
            // $query ="INSERT INTO programming_lang (field1, field2, field3) VALUES ( '". $fieldVal1."','".$fieldVal2."','".$fieldVal3."' )";
            mysqli_query($conn, $query);
        }
    }
    
  
   
     
//      $sql = "INSERT INTO confirmedorders(Patient_ID,NAME,quantity,price) VALUES('$Patient_ID','$Name','$Quantity','$Price')";
//     //  $sql = "INSERT INTO cart(Patient_ID,NAME,quantity,price) VALUES('$table')";
   
//       if ($conn->query($sql) === TRUE) {
   
//           $data = array("Data inserted");
//         echo json_encode($data);
//    }   
//       else {
//     echo "Error: " . $sql . "<br>" . $conn->error;
//    }
   
   $conn->close();
   }


?>