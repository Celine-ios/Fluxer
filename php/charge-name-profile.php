<?php
#charge-name-profile.php
   
    
    include 'UserClass.php';

    	$user = new UserClass();

       $name = $user -> fetch_name();

        $data_array = array('name' => $name[0],'username' => $name[1]);

           $json_data = json_encode($data_array);

             echo $json_data;
         

?>