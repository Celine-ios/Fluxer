
       // TEST IT!	   alert(screen.width);

function funny_button() {


	document.getElementsByClassName('boton_aceptar')[0].style.visibility='visible';
    
    document.getElementsByClassName('boton_aceptar')[0].style.top='52%';

    		var ancho = screen.width;

     var alto = screen.height;

         if ((ancho >= 320) && (alto >= 460)) {

         		document.getElementsByClassName('boton_aceptar')[0].style.top='80%';
 

                if (ancho > 425) {

                  document.getElementsByClassName('boton_aceptar')[0].style.top='40%';                 
                      
         }

             if ((alto > 757) && (ancho > 425) ) {


                document.getElementsByClassName('boton_aceptar')[0].style.top='53%';


             }

         }            
         


 
         }
       


function changer() {
	
   document.getElementById('header').style.boxShadow='none';
   document.getElementById('fast_line').style.width='100%';	



    
}
function event_logger() {
	
	document.getElementsByClassName('boton_aceptar')[0].onclick=changer;

}
window.onload=event_logger;