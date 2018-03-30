// HEROS ALGORYMTH by:Juan Guzman

function loloplo() {

    var Persona1=document.getElementById('fptext').value;
    var Persona2=document.getElementById('sptext').value;
    var Pa=20;
    var Pb=20;
    
      if (Pa==Pb) {
       
       				
       				document.getElementById('Cuadre_algo').style.visibility="visible";
                document.getElementsByTagName('h3')[0].innerHTML=''+Persona1;
                   
                       alert("Tu Cuadre Perfecto es:"+"\t"+Persona1);           

      }
      else {
      	
      	alert("Tu Cuadre Perfecto es:"+"\t"+Persona2);

      	      document.getElementById('Cuadre_algo').style.visibility="visible";
                document.getElementsByTagName('h3')[0].innerHTML=''+Persona2;
      }
}

// cuando se escriban la informacion de los perfiles y se guarde en un .txt en el server
// a traves del primer script.Te redirigira a otra pagina con un script que se ejecutara cuando el documento HTML se este cargando
// este lo que hara sera ejecutar el algoritmo y mostrar los resultados en pantalla 

// var Pa = Fa + Pha
// var Pb = Fb + Phb





















