// NAME:wh0am1 LANGUAGE:JavaScript
// DATE:? PROJECT: FríendSpace Scripting

function changer() {
             
           var booly = document.getElementsByClassName('your_message')[0].style.visibility.value;

           var comprobator = 'hidden';

            // if () {
	            
              document.getElementsByClassName('your_message')[0].style.visibility='visible';

	var caja_value = document.getElementsByClassName('cajaenvio')[0].value;

        document.getElementsByClassName('text_message')[0].innerHTML=''+caja_value;
       // }

      //  else {

          /* code to create a new message div an get out them with the value of the message field */
     //   }        
}

/* para hacer una caja que crezca proporcionalmente
 al tamaño del texto se usa una funcion para devolver
  el valor de la longitud del texto escrito para,a partir de eso,generar
   una caja con un tamaño adecuado para el texto */


   /* crear una maldita sentencia de estructura de control switch
    para elegir el tamaño de la caja con respecto al valor de la longitud del texto */

    //si preguntas por que escribi tantos comentarios es porque estaba drogado con cafe mientras lo hice


  // PD:usa por favor el evento onkeyup para activar el script
  

    function metric_box(switch_selector) {

            document.getElementsByClassName('your_message')[0].style.visibility='hidden';

      var switch_selector = document.getElementsByClassName('cajaenvio')[0].value;


            var px_string = 'px';

            var selector_object = switch_selector.length;

            var SUp3RN0va_alto = 50;
            var SUp3RN0va_ancho = (10 * selector_object) + 30 /20;

            

            if ( SUp3RN0va_ancho >= 431) {


               var SUp3RN0va_alto_incremented = 2 * selector_object + 46;


                document.getElementsByClassName('your_message')[0].style.height=''+SUp3RN0va_alto_incremented;


            }
               

              else {     

      			switch (selector_object) {



              case 20:

                document.getElementsByClassName('your_message')[0].style.width='230px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;



              case 19:

                document.getElementsByClassName('your_message')[0].style.width='220px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;



              case 18:

                document.getElementsByClassName('your_message')[0].style.width='210px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;

              
               case 17:

                document.getElementsByClassName('your_message')[0].style.width='200px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;


              case 16:

                document.getElementsByClassName('your_message')[0].style.width='190px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;

              
                 case 15:

                document.getElementsByClassName('your_message')[0].style.width='180px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;



              case 14:

                document.getElementsByClassName('your_message')[0].style.width='170px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;



              case 13:

                document.getElementsByClassName('your_message')[0].style.width='160px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;




              case 12:

                document.getElementsByClassName('your_message')[0].style.width='150px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                break;

              case 11:

               document.getElementsByClassName('your_message')[0].style.width='140px';
               document.getElementsByClassName('your_message')[0].style.height='50px';

          
                break;

             case 10:

                document.getElementsByClassName('your_message')[0].style.width='130px';
                document.getElementsByClassName('your_message')[0].style.height='50px';


                    break;

                 case 9: 

                     document.getElementsByClassName('your_message')[0].style.width='120px';
                     document.getElementsByClassName('your_message')[0].style.height='50px';
                         
                      break;                 



                  case 8: 

                      document.getElementsByClassName('your_message')[0].style.width='110px';
                      document.getElementsByClassName('your_message')[0].style.height='50px';

                       break;

                  case 7:

                        document.getElementsByClassName('your_message')[0].style.width='100px';
                        document.getElementsByClassName('your_message')[0].style.height='50px';

                        break;
                         
                         case 6:

                        document.getElementsByClassName('your_message')[0].style.width='90px';
                        document.getElementsByClassName('your_message')[0].style.height='50px';


                          break;

                    	case 5:


                    	  document.getElementsByClassName('your_message')[0].style.width='80px';
                          document.getElementsByClassName('your_message')[0].style.height='50px';

                    	   break;

 							        case 4:
  

                    	   			document.getElementsByClassName('your_message')[0].style.width='70px';
                          			document.getElementsByClassName('your_message')[0].style.height='50px';

                                      break;

      					      case 3:


      					   document.getElementsByClassName('your_message')[0].style.width='60px';
                          document.getElementsByClassName('your_message')[0].style.height='50px';

                             break;

                       case 2:

                     document.getElementsByClassName('your_message')[0].style.width='50px';
                          document.getElementsByClassName('your_message')[0].style.height='50px';

                             break;

                          default:

                      document.getElementsByClassName('your_message')[0].style.width=''+SUp3RN0va_ancho + px_string;
                          document.getElementsByClassName('your_message')[0].style.height=''+SUp3RN0va_alto + px_string;

                           break;

                               
                        /* por favor seguir agregando mas casos segun los posibles valores del largo del mensaje
                         puedes sacar los valores para las propiedades en css de la ecuacion matematica */   

                         // IMPORTANTE: RECALCULAR LA FUNCION POR FAVOR PD: ¡FUNCIONA!                        
      					
      					}
            }     

}

/* SUp3RN0va equation
   CREADA POR:wh0am1

 w=x<431; h = 50;

 w=x>431; h = 2 * nl + 46;
 
    w = (10 * nl) + 30 - 20;

     LEYENDA (INDICE DE COEFICIENTES):
      
     nl=numero de letras;
     h=alto;
     w=ancho;
   
   */ 





