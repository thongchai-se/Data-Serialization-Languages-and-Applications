<?php
require("config.php");
header("Content-Type:application/json");
// ตรวจว่ามีพารามิเตอร์ a_id ส่งมาและไม่ว่าง
if (isset($_GET['a_id']) && $_GET['a_id'] != "") {
    $a_id = $_GET['a_id']; // รับรหัสนักกีฬาจาก URL
    require("connect.php");
    // ค้นหาข้อมูลนักกีฬาจากตาราง athlete ตาม a_id
    $result = mysqli_query(
        $link,
        "SELECT * FROM `athlete` WHERE a_id=$a_id"
    );
    if (mysqli_num_rows($result) > 0) {
        $row = mysqli_fetch_array($result, MYSQLI_ASSOC);
        // ดึงค่าแต่ละคอลัมน์ออกมาเตรียมส่งกลับ
        $a_name = $row['a_name'];
        $a_sport = $row['a_sport'];
        $a_phone = $row['a_phone'];
        response($a_id, $a_name, $a_sport, $a_phone); // ส่งข้อมูลกลับเป็น JSON
        require("unconn.php");
    } else {
        // ไม่พบข้อมูลในฐานข้อมูล
        response(200, "No Record Found");    
    }
} else {
    // ไม่ได้ส่ง a_id มา หรือค่าว่าง
    response(400, "Invalid Request"); 
}
// จัดรูปข้อมูลเป็น array แล้วแปลงเป็น JSON ส่งออก
function response($a_id, $a_name, $a_sport, $a_phone)
{
    $result = array("a_id" => $a_id, "a_name" => $a_name, "a_sport" => $a_sport, "a_phone" => $a_phone);
    echo json_encode($result);
}
?>
