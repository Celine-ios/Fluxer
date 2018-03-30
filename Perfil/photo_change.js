function back() {
    
    
      document.getElementById('change_photo').style.visibility='hidden';
}
function boom() {
    
    
      document.getElementById('change_photo').style.visibility='visible';
}

function pick() {
    
    
       var change_photo = document.getElementsByClassName('header')[0];
    
     
         change_photo.addEventListener('mouseover',boom,false);
    
          change_photo.addEventListener('mouseout',back,false);
}
window.onload=pick;