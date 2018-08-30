var content = document.getElementById('content');
var ajax = new XMLHttpRequest();

var setTableSlider = () => {
	if(document.getElementById('personas')) {
		var personas = document.getElementById('personas');
		var publicidad = document.getElementById('publicidad');

function change(caller) {
	if(caller == 'personas') {
		personas.classList.add('green-border');
		publicidad.classList.remove('green-border');
	} else {
		publicidad.classList.add('green-border');
		personas.classList.remove('green-border');
		// Ejecutar llamada a AJAX para recoger la publicidad
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
}
};

var search = () => {
	var par = document.getElementsByName('search')[0].value;
	ajax.onreadystatechange = () => {
		if(ajax.readyState == 4 && ajax.status == 200) {
		var users = JSON.parse(ajax.responseText);
		// Remove grid form content
		content.classList.remove('grid');
		content.classList.remove('grid-boxes');

		// Set HTML table
		var tableOpen = '<table class="table"><thead><th class="green-border" id="personas">Personas</th><th id="publicidad">Publicidad</th></thead><tbody>';
		// Close tags
		var tableClose = '</tbody></table>';

		// Iterating trough every user and append it to the html table
		if (users.length == 0) {
			content.innerHTML = '<h1> NO results for: '+ par +'</h1>';
			return;	
		}
		users.map((user) => {
			tableOpen += '<tr><td class="left-side"><img src="../Perfil/'+user.perfil+'" alt="" class="image-search"></td><td class="right-side"><h4>'+user.nombre+'</h4><span class="txt-grey">@'+user.direccion+'</span></td></tr><tr style="border-bottom: 1px solid #ddd;width: 95%; margin: 0% 2.5%;">';
		});
		// Appending table
		content.innerHTML = tableOpen + tableClose;
		setTableSlider();
		}
		if(ajax.readyState == 3) {
			content.innerHTML = '<h1>Procesando...</h1>';
		}
		if(ajax.readyState == 4 && ajax.status == 404) {
			content.innerHTML = '<h1>Error</h1>';	
		}
	};
	ajax.open('post', '../php/ajax/search.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send('s=' + par);
};
	

function chargeEvents() {
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && this.status == 200) {
		    var users = JSON.parse(this.responseText);
		    var hots = [];
		    users.map(function(user) {
		 		var item = '<div class="item item-hot" style="background-image: url(../Perfil/'+user.perfil+');background-size: cover;background-repeat: no-repeat;background-position: center;display: flex;flex-direction: column;justify-content: flex-end;"><div class="container" style="margin: 4%;text-align: left;color: #fff;"><h2><a href="#" class="link" style="color: #fff;">'+user.nombre+'</a><br><small><a href="#" class="link" style="color: #fff;">@'+user.direccion+'</a></small></h2></div></div>'
		 		hots.push(item);
		    });
		    var hotContent = '';
		  	hots.forEach(function(hot) {
		  		 hotContent += hot;
		  	});
		  	var content = document.getElementById('content');
		  	content.innerHTML = hotContent;
		}
	};
	ajax.open('get', '../php/ajax/search-hot.php', true);
	ajax.send();
	/* 
		AJAX Search 
	*/
	document.getElementById('search-button').addEventListener('click', search);
	document.getElementsByName('search')[0].addEventListener('keyup', search);

}
window.addEventListener('load', chargeEvents(), false);