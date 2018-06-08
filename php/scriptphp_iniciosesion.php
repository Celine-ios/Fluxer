<?php

        //include 'class/ConnectionClass.php';
        include 'class/RegisterClass.php';
        include 'class/UserClass.php';


    // SESSION VARIABLES

  $correo = $_POST['email'];
  $psswd = $_POST['password'];
  session_start();
  $_SESSION['email'] = $correo;
  $_SESSION['password'] = $psswd;
  $user = new UserClass();
  $username = $user -> fetch_name();
  $_SESSION['username'] = $username[1];

         // DATABASE CONNECTION VARIABLES

           $host = 'localhost:3306';
           $user = 'root';



  	 $conn = new Connection();

    $test = $conn -> connect();

  	  if (!$test) {
  	  	# code...

  	  	  echo 'we could not connect with the database server '.mysqli_connect_error($test);

            return;


  	  }

      $select = $conn -> select_db($test,'fluxer');

         if (! $select) {


                die("No selected".mysqli_error($conn));
         }

          $registerclass = new Register();

        $query = $registerclass -> check_register($test,$correo);


  	      if (!$query) {


  	      	   die("Sorry, You are not registered".mysqli_error($conn));

                  return;

  	      }

          // Bucle para crear el arreglo

          while ($row = mysqli_fetch_array($query,MYSQLI_BOTH)) {

                 //Verificar correo

               if ($row['CORREO'] == $correo) {


                       $cipher_password = $row['CONTRASENA'];


                           //Verificar Contraseña

                      if (password_verify($psswd,$cipher_password)) {


                             echo '<meta http-equiv="refresh" content="0.2;url=http://127.0.0.1/dashboard/Fluxer/Perfil/">';

                              return;

                      }

                       else {


                              /*echo "Tu contraseña es Incorrecta";
                              echo '<meta http-equiv="refresh" content="1;url=http://127.0.0.1/dashboard/Fluxer/">';*/

                                include('invalid_password.php');

                               return;


                       }

               }


          }

              include('invalid_email.php');

                                   return;




                    mysqli_close($conn);


?>
