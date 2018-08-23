var content = document.getElementById('content');
var ajax = new XMLHttpRequest();

var search = () => {
	var par = document.getElementsByName('search')[0].value;
	alert(par);
	ajax.onreadystatechange = () => {
		if (ajax.readyState == 4 && this.status == 200) {
			var results = this.responseText;
			console.log(results);
		}
	};
	ajax.open('post', '../php/ajax/search.php', true);
	ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	ajax.send("s=" + par);
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