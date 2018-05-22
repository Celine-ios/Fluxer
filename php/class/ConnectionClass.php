<?php 

	class Connection 
	{
		
		var $db_host;
		var $db_user;
		var $db;

		function __construct()
		{
			
			 $this -> db_host = '127.0.0.1:3306';
			 $this -> db_user = 'root';
			 

			  
		}


		function connect()
		{
			
			   $conn = mysqli_connect($this -> db_host, $this -> db_user);

			   return $conn;
		}

		  function select_db($conn,$db) {


		  			$this -> db = $db;

		  		$select = mysqli_select_db($conn, $this-> db);


		  			return $select;
		  }

		 
}

 ?>