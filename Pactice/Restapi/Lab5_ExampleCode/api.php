<?php
require("config.php");
header("Content-Type:application/json");
if (isset($_GET['a_id']) && $_GET['a_id'] != "") {
    $a_id = $_GET['a_id'];
    require("connect.php");
    $result = mysqli_query(
        $link,
        "SELECT * FROM `athlete` WHERE a_id = '$a_id'"
    );
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        
        $a_name = $row['a_name'];
        $a_sport = $row['a_sport'];
        $a_phone = $row['a_phone'];
        response($a_id, $a_name, $a_sport, $a_phone);
        require("unconn.php");
    } else {
        response(NULL, NULL, NULL, NULL, 200, "No Record Found");    
    }
} else {
    response(NULL, NULL, NULL, NULL, 400, "Invalid Request"); 
}
function response($a_id, $a_name, $a_sport, $a_phone)
{
    $result = array("a_id" => $a_id, "a_name" => $a_name, "a_sport" => $a_sport, "a_phone" => $a_phone);
    echo json_encode($result, JSON_PRETTY_PRINT);
    
}
?>