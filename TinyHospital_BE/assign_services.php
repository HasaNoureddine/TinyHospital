<?php
include('connection.php');
$patientid=$_POST["idpatient"];
$departmentid=$_POST["idmedications"];
$descriptionid=$_POST["iddescriptions"];


$query = $mysql -> prepare ("INSERT INTO `services`(patient_id,department_id,`description`) VALUES($patientid,$departmentid,$descriptionid)") ;
$query -> execute();
$result = $query -> get_result();

$response=[
    "status" => "service assigned"
];



echo json_encode($response)
?>