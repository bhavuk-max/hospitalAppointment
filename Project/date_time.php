<?php
$server="localhost";
$username="root";
$password="";
$dbname="date_time";

$conn= new mysqli($server,$username,$password,$dbname);

if($conn->connect_error){
    echo "connection failed".$mysqli->connect_error;
}

echo "Connection successfully";
?>