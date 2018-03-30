<?php 
#check_email.php

		include 'ConnectionClass.php';
    include 'RegisterClass.php';

   $correo = $_GET['email'];

   		$db_host = '127.0.0.1:3306';
   		$db_user = 'root';

      $conn = new Connection();

         $test = $conn -> connect();

             if (! $test) {
             	
             	  die("No Connected".mysqli_connect_error($test));

             	    return;
             }

             $select = $conn -> select_db($test,'fluxer');

               $registerclass = new Register();

              $query = $registerclass -> check_if_avaible_email($test,$correo);

                   echo $query;

 ?>