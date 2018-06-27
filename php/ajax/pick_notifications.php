<?php 
    //include '../class/ConnectionClass.php';
    include '../class/UserClass.php';
    session_start();
    $email = $_SESSION['email'];
 	$psw = $_SESSION['password'];

 	$db = new Connection();
 	$conn = $db->connect();
 	$sel = $db->select_db($conn, 'fluxer');

 	$user = new UserClass();
 	$wiki = $user -> fetch_notifications();
 	echo $wiki;
 ?>