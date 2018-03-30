
function notification_changer (notif_name) {

    var notif_name = prompt("Escribe tu nombre aqui","Nombre");

        var notif_1 = document.getElementsByTagName('a')[0].innerHTML='Hola '+ notif_name;

        var notif_2 = document.getElementsByTagName('a')[1].innerHTML='Mi Pene te ha etiquetado en una foto de '+ notif_name;
        
        var notif_3 = document.getElementsByTagName('a')[2].innerHTML='Hola me llamo '+ notif_name + ' y soy un Nerd';

}
window.onload=notification_changer;

   