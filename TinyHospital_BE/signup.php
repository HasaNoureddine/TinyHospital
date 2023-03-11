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






?>