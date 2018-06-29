//profile-script.js

function preview_wallpaper(input, type) {
  
   if (input.files && input.files[0]) {

        var reader = new FileReader();
        reader.onload = function (e) {
          if(type == 'profile') {

            $('.image-hidden-modal').css('display','block');        

        $('.image-hidden-modal').attr('src', e.target.result);

            var nombre = input.files[0].name;
             var formato = nombre.split('.');
             if ((formato[1] != 'jpg') && (formato[1] != 'png')) {
                    alert("Éste tipo de archivos no pueden ser subidos");
                     return;
               }
              return;
          }

        $('.image-hidden-modal').css('display','block');        

        $('.image-hidden-modal').attr('src', e.target.result);

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

                        var description = document.getElementById('description');
                        description.style.display='none';

                        var notifications = document.getElementById('notifications');
                        notifications.style.display='none';

                        var likes_number = document.getElementsByClassName('likes').length;
                        alert(likes_number);
                        for(index = 0; index < likes_number; index++) {
                          document.getElementsByClassName('likes')[index].style.width='50%';
                        document.getElementsByClassName('comment')[index].style.width='50%';
                        document.getElementsByClassName('title')[index].style.paddingTop='5%';
                        }

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

            preview_wallpaper(this, 'wallpaper');

       } ,false);

       var modal_profile = document.getElementsByClassName('modal')[1];
       var tooltip_profile = document.getElementById('profile-tooltip');
       var wallpaper_profile = document.getElementById('file-wallpaper-profile');

       tooltip_profile.addEventListener('click', function() {
          show_modal(modal_profile);
       }, false);
       wallpaper_profile.addEventListener('change', function() {
          preview_wallpaper(this, 'profile');
       }, false);



    }

 window.addEventListener('load',responsive_charge,false);
    