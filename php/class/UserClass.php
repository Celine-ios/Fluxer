<?php

  /**
  * 
  */

   include 'ConnectionClass.php';
 
  class UserClass
  {

  	  private $email;
  	  private $password;
  	
  	function __construct()
  	{
  		 session_start();
  		
  		$this -> email = $_SESSION['email'];
  		$this -> password = $_SESSION['password'];


  	}

  	 function fetch_name() {

        
             $conn = new Connection();

               $test = $conn -> connect();

                $select = $conn -> select_db($test,'fluxer');

                	$email = $this -> email;

	    $sql = "SELECT NOMBRE_USUARIO,DIRECCION FROM usuarios WHERE CORREO='".$email."';";

	    		$query = mysqli_query($test,$sql);

	    		   $row = mysqli_fetch_array($query,MYSQLI_BOTH);

	    		     return $row;


  	 }

    function fetch_wallpaper()
    {
      
         $conn = new Connection();

            $test = $conn -> connect();

            $select = $conn -> select_db($test,'fluxer');

            $email = $this -> email;

            $sql = "SELECT PORTADA FROM usuarios WHERE CORREO='".$email."';";

              $query = mysqli_query($test, $sql);

                $row = mysqli_fetch_array($query,MYSQLI_BOTH);

                  return $row['PORTADA'];
    }

    public function change_wallpaper($link_new_wallpaper)
    {
         $conn = new Connection();

            $test = $conn -> connect();

            $select = $conn -> select_db($test,'fluxer');

             // Fetch the username

             $user = $this -> fetch_name();

             $sql = "UPDATE usuarios SET PORTADA='".$link_new_wallpaper."' WHERE DIRECCION='".$user[1]."';";

              $query = mysqli_query($test, $sql);

              if ($query) {
                
                return true;

              }

              else {

                return false;
              }

    }
  }

 ?>
  