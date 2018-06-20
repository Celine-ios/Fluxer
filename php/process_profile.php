<?php 
#process_profile.php

      include 'class/UserClass.php';

  $wallpaper = $_FILES['profile']['name'];

       $name_array = explode('.', $wallpaper);

       	// File Info

         $format = $name_array[1];
         $name = $name_array[0];

         	$user = new UserClass();

         	// User Address

         	$address = $user -> fetch_name();

         	// User Wallpaper URL

         	$old_profile_url = $user -> fetch_profile();

         	// Old Wallpaper Format

         	//$old_wallpaper = explode('.', $wallpaper_url);

         	//$old_wallpaper_format = $old_wallpaper[1];

         	unlink('C:/xampp2/htdocs'.$old_profile_url);

           move_uploaded_file($_FILES['profile']['tmp_name'],'C:/xampp2/htdocs/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.$wallpaper);

          rename('C:/xampp2/htdocs/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.$wallpaper,'C:/xampp2/htdocs/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.'profile.'.$format);

           $new_wallpaper_link = '/dashboard/Fluxer/Perfil/'.$address[1].'/'.'images/'.'profile.'.$format;

            
            $delete_wallpaper = $user -> change_profile($new_wallpaper_link);

              if ($delete_wallpaper == true) {
                
                  echo '<meta http-equiv="refresh" content="0.05;url=http://127.0.0.1/dashboard/Fluxer/Perfil/">';

                return;
              }

              echo "Failed";

           

 ?>