<?php 
#charge-wallpaper.php

   include 'UserClass.php';


   	  $user = new UserClass();

   	    $wallpaper = $user -> fetch_wallpaper();

   	      echo $wallpaper;
 ?>