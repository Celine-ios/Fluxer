
var personas = document.getElementById('personas');
	var publicidad = document.getElementById('publicidad');

function change(caller) {
	if(caller == 'personas') {
		personas.classList.add('green-border');
		publicidad.classList.remove('green-border');
	} else {
		publicidad.classList.add('green-border');
		personas.classList.remove('green-border');
	}
}
function chargeEvents() {
	personas.addEventListener('click', function() {
		change('personas');
	}, false);
	publicidad.addEventListener('click', function() {
		change('publicidad');
	}, false);
}
window.addEventListener('load', chargeEvents(), false);