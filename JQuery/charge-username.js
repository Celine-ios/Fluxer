/*
   charge-name.js
   Jquery Script 
   Created by: Juan Guzmán
   CEO & Founder
   Fluxer 
              */

$(document).ready(function() {


		 $.get('/dashboard/Fluxer/php/charge-name-profile.php',function(request) {

                var user = JSON.parse(request);

		 				$('#name').html('Hola '+user.name+'!');
            $('#name-heading').html(user.name+'<br>'+'<small>@'+user.username+'</small>');

		 });

});