//profile-script.js

 function change_wallpaper() {
 	
 	 var element = document.getElementsByClassName('modal')[0];

 	   element.style.display='block';
 }

 function charge() {


     var tooltip = document.getElementById('tooltip');

       tooltip.addEventListener('click',change_wallpaper,false); 

             var ancho = screen.width;

               alert(ancho);

              if (ancho <= 425) {

              		alert("Hello");

              	var post_container = document.getElementById('timeline');

              			post_container.classList.remove('container-3');

              	   post_container.classList.add('container-7');

                   var container = document.getElementById('');

              	    return;

              }

    }
 window.addEventListener('load',charge,false);