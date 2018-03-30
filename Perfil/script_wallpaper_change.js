   function pick_up() {

       var wallp_tip = document.getElementById('change_wallpaper');
    
      wallp_tip.style.visibility='hidden';
    
         wallp_tip.style.height='0%';
 
       
           
   }

function shooter() {
    

var wallp_tip = document.getElementById('change_wallpaper');
    
      wallp_tip.style.visibility='visible';
    
         wallp_tip.style.height='18%';
    
}

  function charger() {
      
       
      
var header_wallpaper = document.getElementsByClassName('header')[0];
      

      header_wallpaper.addEventListener('mouseover', shooter, true);
      
      header_wallpaper.addEventListener('mouseout',pick_up,false);
      
}

window.addEventListener('load', charger, false);