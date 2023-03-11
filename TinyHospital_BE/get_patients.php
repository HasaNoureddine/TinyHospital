<?php

include('connection.php');

$query = $mysql -> prepare ('SELECT * FROM `patients`');
$query -> execute();
$result = $query -> get_result();

while($object = $result -> fetch_assoc()){
    $data[] = $object;
}

$response = [
    "patients" => $data
];

echo json_encode($response);

?>