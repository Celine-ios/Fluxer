<?php 
	include 'class/UserClass.php';
	$user = new UserClass();
	$profile = $user -> fetch_profile();
	echo $profile;

 ?>