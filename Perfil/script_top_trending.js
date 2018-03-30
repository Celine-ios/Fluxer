
function reactor() {
	
      // agrandamiento de la division de hashtags 


     document.getElementsByClassName('top_trending_hashtags')[0].style.height='50%';
      document.getElementsByClassName('text_hshtgs_fill')[0].style.height='50%';
         
          // visibilidad de los hashtags

           document.getElementsByTagName('p')[7].style.visibility='visible';
            document.getElementsByTagName('p')[8].style.visibility='visible';
             document.getElementsByTagName('p')[9].style.visibility='visible';
              document.getElementsByTagName('p')[10].style.visibility='visible';
               document.getElementsByTagName('p')[11].style.visibility='visible';
              document.getElementsByTagName('p')[12].style.visibility='visible';
             document.getElementsByTagName('p')[13].style.visibility='visible';
            document.getElementsByTagName('p')[14].style.visibility='visible';
	
	
}
 function dereactor() {
	


      // visibilidad de los hashtags

           document.getElementsByTagName('p')[7].style.visibility='visible';
            document.getElementsByTagName('p')[8].style.visibility='visible';
             document.getElementsByTagName('p')[9].style.visibility='hidden';
              document.getElementsByTagName('p')[10].style.visibility='hidden';
               document.getElementsByTagName('p')[11].style.visibility='hidden';
              document.getElementsByTagName('p')[12].style.visibility='hidden';
             document.getElementsByTagName('p')[13].style.visibility='hidden';
            document.getElementsByTagName('p')[14].style.visibility='hidden';

	 // enpequeñecimiento de la division de hashtags 

     document.getElementsByClassName('top_trending_hashtags')[0].style.height='25%';
      document.getElementsByClassName('text_hshtgs_fill')[0].style.height='25%';
         
} 


function events_charger() {

	// body...

         
         //evento para desplegar lista completa
         
	document.getElementsByClassName('text_hshtgs_fill')[0].onmouseover=reactor;


         //evento para plegarla

	document.getElementsByClassName('text_hshtgs_fill')[0].onmouseout=dereactor;





}











