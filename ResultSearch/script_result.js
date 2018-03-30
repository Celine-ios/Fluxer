

function quick_line( ) {

          
     document.getElementsByClassName('cool_line')[0].style.width='100%';

    
    
    setInterval( function() {
        
       var cool_line = document.getElementsByClassName('cool_line')[0];
        
              function second() {
                  
                  var cool_line_width_reference = document.getElementsByClassName('cool_line')[0].style.width;  
                  
                      if ( cool_line_width_reference == '100%') {
                          
                          
                          cool_line.style.WebkitTransition='background 2s ease 1s';
                          
                  cool_line.style.background='-webkit-linear-gradient(left,green,blue)';
                          cool_line.style.background='-webkit-linear-gradient(left,yellow,blue)';
                          cool_line.style.background='-webkit-linear-gradient(left,#8b11af,blue)';
                          cool_line.style.background='-webkit-linear-gradient(left,limegreen,blue)';
                          
                          
                      }   
                  
                 
                      
                  
                      
              }
            
           
                       
                cool_line.style.background='-webkit-linear-gradient(left,red,blue)';
                 
                 return second(); 
        
        
   
                 
                  
                   
                 
        }, 1000);



}

   function elements () {

   					/* Links de perfil y publicidad */
   					
   					document.getElementsByTagName('a')[0].onclick=quick_line;
   						document.getElementsByTagName('a')[1].onclick=quick_line;

   							/* Links de resultados de busqueda */

   				document.getElementsByTagName('a')[2].onclick=quick_line;
             document.getElementsByTagName('a')[3].onclick=quick_line;
              document.getElementsByTagName('a')[4].onclick=quick_line;
              document.getElementsByTagName('a')[5].onclick=quick_line;
            document.getElementsByTagName('a')[6].onclick=quick_line;
            	document.getElementsByTagName('a')[7].onclick=quick_line;
            	document.getElementsByTagName('a')[8].onclick=quick_line;
            	document.getElementsByTagName('a')[9].onclick=quick_line;





}
window.onload=elements;
