<?php 
#register.php

    include 'class/ConnectionClass.php';
    include 'class/RegisterClass.php';

   $direccion_cuenta = $_POST['direccion_cuenta'];
   $nombre_usuario = $_POST['nombre_usuario'];
   $email = $_POST['email'];
   $password = $_POST['password'];
   $password_two = $_POST['password2'];
   


$dbhost = 'localhost:3306';
$db_user = 'root';

  $conn = new Connection();

    $test = $conn -> connect();


if (!$test) {

die('Could not connect: ' . mysqli_connect_error($test));

     return;

}
		
$select = $conn -> select_db($test,'fluxer');

if (!$select) {

    die("No pudimos seleccionar una Base de Datos".mysqli_error($test));
}

		//REVISAR SI LAS CONTRASEÑAS SON IGUALES

  if ($password == $password_two) {
  	

  		$password_cipher = password_hash($password,PASSWORD_DEFAULT);
  		$link = "/".$direccion_cuenta."/";

            $registerclass = new Register();

        $register = $registerclass -> registerUser($direccion_cuenta,$nombre_usuario,$email,$password_cipher,$link,$test);	

  			     if (! $register) {
  			     	
  			    die("Sorry, We couldn´t Register You".mysqli_error($test));


  			       return;


  			     }

             //CREAR BASE DE DATOS PARA POSTS
             // FALTAN COLUMNAS PARA LA BD
             // FALTAN COLUMNAS PARA LA BD
             // FALTAN COLUMNAS PARA LA BD
             // FALTAN COLUMNAS PARA LA BD
             // FALTAN COLUMNAS PARA LA BD

             // Creating Posts table
             $sql = "CREATE TABLE ".$direccion_cuenta."posts(title varchar(200),time DATETIME,footer varchar(200000),comments BIGINT(200),likes INT(200))";

             $query_create_post_db = mysqli_query($test, $sql);

               if (! $query_create_post_db) {
                  die("ERROR: ".mysqli_error($test));
                  return;
               }

               // Creating Notifications Table
               $sql = "CREATE TABLE ".$direccion_cuenta."notifications(photo varchar(200),time DATETIME, content varchar(200))";

             $query_create_notif_db = mysqli_query($test, $sql);

               if (! $query_create_notif_db) {
                  die("ERROR: ".mysqli_error($test));
                  return;
               }


                 $directory = mkdir('../Perfil/'.$direccion_cuenta.'/');

                    if (! $directory) {
                      
                       echo "Sorry";

                        return;
                    }

                     // Crear directorios de contenido multimedia

                      mkdir('../Perfil/'.$direccion_cuenta.'/images'.'/');
                      mkdir('../Perfil/'.$direccion_cuenta.'/videos'.'/');
                      mkdir('../Perfil/'.$direccion_cuenta.'/music'.'/');

                      $to = $email;
                      $title = 'Bienvenido a Fluxer, Empieza a compartir memes';
                      $message = '<!DOCTYPE html><html>'.
                    '<head><title>Bienvenido a Fluxer</title></head>'.
                      '<body><h1>Estamos orgullosos de tí</h1>'.
                      'Por formar parte de nosotros, ahora, empieza a vivir'.
                      '<hr>'.
                      'Empieza a ser importante'.
                      '</body>'.
                      '</html>';

                      $headers = 'MIME-Version: 1.0' . "\r\n";
                      $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
                      $headers .= 'From: Fluxer <support@fluxer.io>';
                      echo $to;
                      $send = mail($to, $title, $message, $headers);

  			     echo '<meta http-equiv="refresh" content="0.2;url=http://127.0.0.1/dashboard/Fluxer/">' ;

  			        return;




  }

    else {


    	  echo "Las contraseñas no coinciden";
    	  echo '<a href="/dashboard/Fluxer/Registro/">Volver al registro</a>';
    }



    


?>