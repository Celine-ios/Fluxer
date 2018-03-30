        function count_email() {
           
            var letters_number_field_email = document.getElementsByClassName('form-control')[2].value;
        
                var lenght_two = letters_number_field_email.length;
        
          
           var number_email = document.getElementsByClassName('input-group-addon')[2];
        
        
               number_email.innerHTML='.0'+lenght_two;
            
             
            
               
        }


    function count_username() {
        
           var letters_number_field_username = document.getElementsByClassName('form-control')[1].value;
        
                var lenght = letters_number_field_username.length;
        
          
           var number_username = document.getElementsByClassName('input-group-addon')[1];
        
        
               number_username.innerHTML='.0'+lenght;
    }

   function charge() {
       
         
          var field_username = document.getElementsByClassName('form-control')[1];
       
               field_username.addEventListener('keyup',count_username,false);
       
             var field_email = document.getElementsByClassName('form-control')[2];
       
                field_email.addEventListener('keyup',count_email,false);
   }
window.addEventListener('load',charge,false);
    
   /* REPETIR MISMA ESTRUCTURA DE CONTROL DE DATOS PARA LAS OTRAS VARIABLES QUE REFERENCIEN A LOS ELEMENTOS HTML 
     
      PARA PROCESARLOS DE LA MISMA MANERA,SOLO AGREGA LAS VARIABLES RESTANTES EN LA FUNCION charge Y REFERENCIALAS CON UN METODO addeventlistener A OTRA FUNCION QUE TENGA LAS MISMAS SENTENCIAS QUE count_username PERO ADAPTADAS*/    