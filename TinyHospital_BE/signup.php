<?php

include('connection.php');

$name=$_POST["name"];
$dob=$_POST["dob"];
$password = $_POST["password"];
$email = $_POST["email"];
$position=$_POST["position"];


$hashed = password_hash($password,PASSWORD_BCRYPT);

$query = $mysql -> prepare("SELECT * FROM `users` where  `password`=? and email=? ");
$query -> bind_param("ss", $password, $email);
$query -> execute();
$result = $query -> get_result();

$query_usertype = $mysql -> prepare("SELECT `iduser_types` FROM `user_types` where  `name`=?  ");
$query_usertype -> bind_param("s", $position);
$query_usertype  -> execute();
$id = $query_usertype -> get_result();
$usertype_id = $id->fetch_assoc()["iduser_types"];


while($row = $result->fetch_assoc()) {
    $data[]=$row;
}




if(isset($data)){
    $response = [
        "status" => "Username or Password already associated with another account"
    ];
}

?>