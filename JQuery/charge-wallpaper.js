/*
   charge-wallpaper.js
   Jquery Script 
   Created by: Juan Guzmán
   CEO & Founder
   Fluxer 
              */

  $(document).ready(function() {

  		$.get('/dashboard/Fluxer/php/charge-wallpaper.php',function(request) {

  				  $('#wallpaper').css("background-image","url('"+request+"')");

  				// Code for put the image link on a url() for background-image property

  		});

  });