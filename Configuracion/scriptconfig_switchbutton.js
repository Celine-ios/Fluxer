// NAME:wh0am1 LANGUAGE:Javascript
// DATE:? PROJECT:ConfigScript

function action() {
    // body...

      document.getElementById('bg_switch_toggle_button').style.backgroundColor='cadetblue';

        document.getElementById('style_switch').style.left='30px';
  }
  function action_button() {

  		document.getElementsByClassName('aceptar_cambios_config_boton')[0].style.visibility='visible';
  	
      document.getElementsByClassName('aceptar_cambios_config_boton')[0].style.left='608px';

  }
  
  function patata() {
     
     document.getElementById('style_switch').onclick=action;
     document.getElementsByClassName('aceptar_cambios_config_boton_div')[0].onmouseover=action_button;

  }
  window.onload=patata;
