function checker() {

			var email_field_value = document.getElementsByClassName('caja')[0].value;
			var password_field_value = document.getElementsByClassName('caja_contraseña')[0].value;

			 if (email_field_value == '') {

				
				document.getElementsByClassName('caja')[0].style.borderBottom='red solid 1px';
				document.getElementsByClassName('caja')[0].style.borderTop='none';
				document.getElementsByClassName('caja')[0].style.borderRight='none';
				document.getElementsByClassName('caja')[0].style.borderLeft='none';


					document.getElementById('remember_email').style.visibility='visible';
				document.getElementById('remember_email').innerHTML='Ingresa tu e-mail';

			}

			else {

               	  document.getElementsByClassName('caja')[0].style.borderBottom='aqua solid 1px';

               	if (password_field_value == '') {

               		document.getElementsByClassName('caja_contraseña')[0].style.borderBottom='red solid 1px';
                    
               		document.getElementById('remember_password').innerHTML='Ingresa tu Contraseña';
               	}
               	else {

               		document.getElementsByClassName('caja_contraseña')[0].style.borderBottom='aqua solid 1px';
               	}
               }
	
		} 

		function password_reconverter() {
			
				var password_field_value = document.getElementsByClassName('caja_contraseña')[0].value;

			if ( password_field_value != '') {

				document.getElementsByClassName('caja_contraseña')[0].style.borderBottom='blue 1px solid';
				document.getElementById('remember_password').style.visibility='hidden';
			}
		}

         function nofocus_changer() {
         			
         			var email_field_value = document.getElementsByClassName('caja')[0].value;
			var password_field_value = document.getElementsByClassName('caja_contraseña')[0].value;
                       

                document.getElementsByClassName('caja_contraseña')[0].style.borderBottom='aqua 1px solid';
                document.getElementsByClassName('caja_contraseña')[0].style.borderTop='none';
                document.getElementsByClassName('caja_contraseña')[0].style.borderRight='none';
                document.getElementsByClassName('caja_contraseña')[0].style.borderLeft='none';

                    if ((email_field_value && password_field_value) == '') {

                    	   alert("Por favor Introduce tu Email y Contraseña\nJuan Guzman");
                    }

                }