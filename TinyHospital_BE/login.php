<?php
    include('connection.php');

    $email=$_POST["email"];
    $password = $_POST["password"];
    

    

    $query = $mysql -> prepare("SELECT `password` FROM `users` where  email=? ");
    $query -> bind_param("s",$email );
    $query -> execute();
    $result = $query -> get_result();
    $object = $result -> fetch_assoc();
  


    if ($object["usertype_id"]==1 && password_verify($password,$object["password"])){
        $response = [
            "user_type" => "admin"
        ];  

    }

?>