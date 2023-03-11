<?php
include('connection.php');
$userid=$_POST["idusers"];
$hospitalid=$_POST["idhospitals"];


$query = $mysql -> prepare ("INSERT INTO `users_hospitals`(hospitals_id,users_id) VALUES($hospitalid,$userid)") ;
$query -> execute();
$result = $query -> get_result();

$response=[
    "status" => "patient assigned to hospital"
];



echo json_encode($response)

?>