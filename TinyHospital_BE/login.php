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

    }else{
        $query = $mysql -> prepare("SELECT * FROM `users` WHERE `email`=? ");
        $query -> bind_param("s", $email);
        $query -> execute();
        $result = $query -> get_result();
        $object = $result -> fetch_assoc();
    
        if($object["usertype_id"]==2 || $object["usertype_id"]==3 && password_verify($password,$object["password"]) ){
                $response = [
                    "idusers" => $object["idusers"],
                    "name" => $object["name"],
                    "email" => $object["email"],
                    "password" => $object["password"],
                    "dob" => $object["dob"],
                    "user_type" => "user",
                ];
                
        }else{
            $response =[
                "message" => "Credentials are incorrect"
            ];
        };
    }



echo json_encode($response)

?>