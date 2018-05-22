<?php 
#charge-wallpaper.php

   include 'class/UserClass.php';


   	  $user = new UserClass();

   	    $wallpaper = $user -> fetch_wallpaper();

   	      echo $wallpaper;
 ?>