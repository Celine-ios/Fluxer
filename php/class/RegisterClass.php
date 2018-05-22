 <?php

  /**
  * 
  */
  class Register 
  {
  	
  	

  	function check_register($conn,$email)
		  {
		  	
		  	$sql = "SELECT CORREO,CONTRASENA FROM usuarios WHERE CORREO='".$email."';";

		  	        $query = mysqli_query($conn,$sql);

		  	          return $query;
		  }

		  function registerUser($account_address,$username,$email,$password_cipher,$link,$conn) {


		  		$sql = "INSERT INTO usuarios (DIRECCION,NOMBRE_USUARIO,CORREO,CONTRASENA,LINK) VALUES ('".$account_address."','".$username."','".$email."','".$password_cipher."','".$link."');";

		  		             $query = mysqli_query($conn,$sql);

		  		               return $query;

		  }

		   public function check_if_avaible_address($conn,$address)
		   {
		   	
		   	     $sql = "SELECT DIRECCION FROM usuarios WHERE DIRECCION='".$address."';";

		   	      $query = mysqli_query($conn,$sql);


		   	             $row = mysqli_fetch_array($query,MYSQLI_ASSOC);

		   	                     echo $row['DIRECCION'];

		
	}

	public function check_if_avaible_email($conn,$email)
		   {
		   	
		   	     $sql = "SELECT CORREO FROM usuarios WHERE CORREO='".$email."';";

		   	      $query = mysqli_query($conn,$sql);


		   	             $row = mysqli_fetch_array($query,MYSQLI_ASSOC);

		   	                    echo $row['CORREO'];


		
	}

  }

 
	?>