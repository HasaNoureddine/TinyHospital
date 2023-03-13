<?php
    include('connection.php');

    $email=$_POST["email"];
    $password = $_POST["password"];
    

    

    $query = $mysql -> prepare("SELECT * FROM `users` where  email=? ");
    $query -> bind_param("s",$email );
    $query -> execute();
    $result = $query -> get_result();
    $object = $result -> fetch_assoc();
  


    if ($object["usertype_id"]==1 ){
        $response = [
            "user_type" => 1
        ];  

    }else{
        $query = $mysql -> prepare("SELECT * FROM `users` WHERE `email`=? ");
        $query -> bind_param("s", $email);
        $query -> execute();
        $result = $query -> get_result();
        $object = $result -> fetch_assoc();
    
        if($object["usertype_id"]==2 ){
                $response = [
                    "user_type" => 2,
                ];
                
        }else if($object["usertype_id"]==3 ){
            $response = [
                "user_type" => 3,
            ];
            
        }else{
                $response =[
                    "message" => "Credentials are incorrect"
                ];
            };
    }



echo json_encode($response)

?>