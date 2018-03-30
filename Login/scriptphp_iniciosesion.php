<?php
  
  $correo = $_POST['email'];
  	$psswd = $_POST['password'];

  	 $con = mysqli_connect('localhost','db_name','db_user','psswd');

  	  if (!$con) {
  	  	# code...

  	  	  echo 'we could not connect with the database server';


  	  }

  	  $sql = 'SELECT passwords AND emails FROM users WHERE emails=$correo AND passwords=$psswd';

  	   $qr = mysql_query($sql,$con);

  	      if (!$sqr) {
  	      	

  	      	   echo 'Sorry,you are not registered';

  	      }

  	        $sql_two = 'SELECT link FROM users WHERE passwords=$psswd AND emails=$correo';


  	                  $reslt = mysql_query($sql_two,$con);


  	                      header("Location: $reslt");

  	                          exit();

?>