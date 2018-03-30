//requise_register.js

  $(document).ready(function() {



  			$('#address').keyup(function() {

  					 var $address = $('#address').val();

  		$.get('http://127.0.0.1/dashboard/Fluxer/php/check_address.php',{"address": $address},function(request) {

               
                            if (request != " ") {


                                  $('.existing-address').attr('style','color: red;display: block;margin: 0 auto;');

                                   return;

                            } else {

                        $('.existing-address').attr('style','display: none;');                                  

                            }

  								 });
  				});

        $('#email').keyup(function() {

             var $email = $('#email').val();

            $.get('http://127.0.0.1/dashboard/Fluxer/php/check_email.php',{"email": $email},function(request) {

                       
                           if (request != " ") {


                                  $('.existing-email').attr('style','color: red;display: block;margin: 0 auto;');

                                   return;

                            } else {

                        $('.existing-email').attr('style','display: none;');                                  

                            }

                  
                   });
          });

  		});



  									


