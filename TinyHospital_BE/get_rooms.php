<?php

include('connection.php');

$query = $mysql -> prepare ('SELECT * FROM `rooms`');
$query -> execute();
$result = $query -> get_result();

while($object = $result -> fetch_assoc()){
    $data[] = $object;
}

$response = [
    "rooms" => $data
];

echo json_encode($response);

?>