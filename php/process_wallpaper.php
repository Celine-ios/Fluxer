<?php 
#process_wallpaper.php

      include 'class/UserClass.php';

  $wallpaper = $_FILES['wallpaper']['name'];

       $name_array = explode('.', $wallpaper);

       	// File Info

         $format = $name_array[1];
         $name = $name_array[0];

         	$user = new UserClass();

         	// User Address

         	$address = $user -> fetch_name();

         	// User Wallpaper URL

         	$old_wallpaper_url = $user -> fetch_wallpaper();

         	// Old Wallpaper Format

         	//$old_wallpaper = explode('.', $wallpaper_url);

         	//$old_wallpaper_format = $old_wallpaper[1];

         	unlink('C:/xampp2/htdocs'.$old_wallpaper_url);

           move_uploaded_file($_FILES['wallpaper']['tmp_name'],'C:/xampp2/htdocs/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.$wallpaper);

          rename('C:/xampp2/htdocs/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.$wallpaper,'C:/xampp2/htdocs/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.'wallpaper.'.$format);

           $new_wallpaper_link = '/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.'wallpaper.'.$format;

            
            $delete_wallpaper = $user -> change_wallpaper($new_wallpaper_link);

              if ($delete_wallpaper == true) {
                
                  echo '<meta http-equiv="refresh" content="0.05;url=http://127.0.0.1/dashboard/Fluxer/Perfil/">';

                return;
              }

              echo "Failed";

           

 ?>