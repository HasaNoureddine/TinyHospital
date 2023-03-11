<?php
include('connection.php');
$userid=$_POST["idusers"];
$medicationid=$_POST["idmedications"];


$query = $mysql -> prepare ("INSERT INTO `users_medications`(medication_id,user_id) VALUES($medicationid,$userid)") ;
$query -> execute();
$result = $query -> get_result();

$response=[
    "status" => "medicine assigned to patient"
];



echo json_encode($response)
?>