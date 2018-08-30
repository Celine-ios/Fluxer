<?php 
	require '../class/ConnectionClass.php';
	$par = $_POST['s'];

	$database = new Connection();
	$con = $database-> connect();
	$sel = $database-> select_db($con, 'fluxer');
	
	$q = 'SELECT * FROM usuarios WHERE DIRECCION = "'.$par.'" OR NOMBRE_USUARIO = "'.$par.'"';
	$result = mysqli_query($con, $q);
	
	$users = array();
	while($row = mysqli_fetch_array($result, MYSQLI_BOTH)) {
		# You could also send the profile description here
		$user = array('nombre' => $row['NOMBRE_USUARIO'], 'direccion' => $row['DIRECCION'], 'link' => $row['LINK'], 'perfil' => $row['F_PERFIL']);
		array_push($users, $user);
	}
	$json = json_encode($users);
	echo $json;
 ?>