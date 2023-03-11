<?php
include('connection.php');
$userid=$_POST["idusers"];
$roomid=$_POST["idrooms"];
$bedid=$_POST["idbeds"];


$query = $mysql -> prepare ("INSERT INTO `users_rooms`(room_id,user_id,bed_id) VALUES($roomid,$userid,$bedid)") ;
$query -> execute();
$result = $query -> get_result();

$response=[
    "status" => "patient assigned to room"
];



echo json_encode($response)
?>