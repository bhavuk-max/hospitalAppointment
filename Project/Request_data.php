<?php
// header('Access-Control-Allow-Origin: *');
// header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
// header("Access-Control-Allow-Headers: Content-Disposition, Content-Type, Content-Length, Accept-Encoding");



// $server="localhost";
// $username="root";
// $password="";
// $dbname="date_time";

// $conn= new mysqli($server,$username,$password,$dbname);

// if($conn->connect_error){
//     echo "connection failed".$mysqli->connect_error;
// }
// else{
//     echo "Connection successfull";
// }

// $sql="SELECT category,avail_doc,Date,Time FROM bookAppointment ";
// $result=mysqli_query($conn,$sql);
// if(mysqli_num_rows($result)>0){
   
//         $row=mysqli_fetch_assoc($result);
//         // echo "category is:-".$row["send"]."available doctor:-".$row["send_doc"]."Date is :-".$row["send_time"];
//         $send=$row["category"];
//         $send_doc=$row["avail_Doc"];
//         $send_date=$row["Date"];
//         $send_time=$row["Time"];
    
// }
// else{
//         $send="";
//         $send_doc="";
//         $send_date="";
//         $send_time="";
// }
// $Response[]=array("category"=>$send,"avail_Doc"=>$send_doc,"Date"=>$send_date,"Time"=>$send_time);

// echo json_encode($Response);
// mysqli_close($conn);

 $rest_json = file_get_contents("php://input");
 $_POST = json_decode($rest_json, true);
 
 
 require_once 'DBase.php';

 $result = mysqli_query($conn,$sql);
$resultCheck = mysqli_num_rows($result);

for($set = array();$row = $result->fetch_assoc();$set[] = $row);
echo json_encode($set);

$conn->close();





?>
