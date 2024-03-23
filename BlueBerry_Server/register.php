<?php

    $username = $_POST["username"];
    $password = $_POST["password"];
    
    $connnect =  mysqli_connect("localhost",'root', "", "blueberrypie");
    if($connnect){
        mysqli_query($connnect,"set names utf8");
        $sql = "insert into User values (null, '$username','$password')";
        $result = mysqli_query($connnect, $sql);
        if($result -> num_rows > 0){
            echo json_encode(array('msg' => 'successfully registered!'));
        }else{
            echo json_encode(array('msg'=> "failed registration"));
        }
    }else{
        echo json_encode(array("msg" => "failing in connecting with database"));
    }

?>