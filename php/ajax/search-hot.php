<?php 
	include '../class/ConnectionClass.php';
	$conn = new Connection();
	$test = $conn->connect();
	$sel = $conn->select_db($test, 'fluxer');
	$sql = "SELECT * FROM usuarios";
	$query = mysqli_query($test, $sql);
	$users = array();
	while($row = mysqli_fetch_array($query, MYSQLI_BOTH)) {
		$users_array = array('perfil' => $row['F_PERFIL'], 'nombre' => $row['NOMBRE_USUARIO'], 'direccion' => $row['DIRECCION'], 'link' => $row['LINK']);
		array_push($users, $users_array);
	}
	$users_json = json_encode($users);
	echo $users_json;
 ?>