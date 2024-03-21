<?php
    $connnect =  mysqli_connect("localhost",'root', "", "blueberrypie");
    if($connnect){
        mysqli_query($connnect,"set names utf8");
        $sql = "select * from user where username = '$username' and password='$password'";
        $result = mysqli_query($connnect, $sql);
        if($result -> num_rows > 0){
            $data = mysqli_fetch_all($result,MYSQLI_ASSOC);
            echo json_encode($data);
        }else{
            echo json_encode(array('msg'=> "usernmae and password not exist"));
        }
    }else{
        echo json_encode(array("msg" => "failing in connecting with database"));
    }

?>