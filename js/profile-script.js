//profile-script.js

function preview_wallpaper(input) {
  
   if (input.files && input.files[0]) {

        var reader = new FileReader();

        
     reader.onload = function (e) {

         
        $('#image-wallpaper').css('display','block');        

        $('#image-wallpaper').attr('src', e.target.result);

         var nombre = input.files[0].name;
            
             var formato = nombre.split('.');



             if ((formato[1] != 'jpg') && (formato[1] != 'png')) {


                    alert("Éste tipo de archivos no pueden ser subidos");

                      
                     return;
               }


              
     }

 

 
    reader.readAsDataURL(input.files[0]);
 }
     
}

 function responsive_charge() {


             var ancho = screen.width;

               
              if (ancho <= 425) {

              		
              	var post_container = document.getElementById('timeline');

              			post_container.classList.remove('container-3');

              	   post_container.classList.add('container-7');

                   var container = document.getElementsByClassName('container-3')[1];

                      container.classList.remove('container-3');

                       container.classList.add('container-7');

                       var button = document.getElementById('button');

                        button.style.margin="0% 1% 4% 56.5%";

              	    return;

              }

    // Wallpaper Modal Issues

        var modal = document.getElementsByClassName('modal')[0];

     var tooltip = document.getElementById('tooltip');

     tooltip.addEventListener('click',function() {

            show_modal(modal);

       },false);

     // </Wallpaper Modal Issues


     var wallpaper = document.getElementById('file-wallpaper');

       wallpaper.addEventListener('change',function(){

            preview_wallpaper(this);

       } ,false);


    }

 window.addEventListener('load',responsive_charge,false);

 
        

  $('#slider').mouseover(function() {

      $('#slider').css('width','25%');
      $('#slider').css('background','-webkit-linear-gradient(left,#22f59d,#0069ff)');
      $('#slider').css('box-shadow','#00000073 20px 0px 100px');
      $('#slider-container').css('visibility','visible');

  });

  $('#slider').mouseout(function() {

    $('#slider').css('width','10%');
      $('#slider').css('background','transparent');
      $('#slider').css('box-shadow','none');
      $('#slider-container').css('visibility','hidden');

  });



    