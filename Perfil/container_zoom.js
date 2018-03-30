
    

function zoom() {
    
         var charge_object = new charge();             
    
       charge_object.container_zoom.style.visibility='visible';
      
             
          }

function recoger_zoom() {
        
               var charge_object = new charge();
        
                 charge_object.container_button_zoom.style.visibility='hidden';
    }

    function charge() {
        
        this.container_zoom = document.getElementsByClassName('zoom')[0];
        
        this.container = document.getElementsByClassName('container')[0];
        
          this.container_button_zoom = document.getElementsByTagName('input')[1];
        
        
               
           container.addEventListener('click',zoom,false);
           container_button_zoom.onclick=recoger_zoom; 
                
              
        
    }
window.addEventListener('load',charge,false);
  







