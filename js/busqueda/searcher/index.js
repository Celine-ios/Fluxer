var content = document.getElementById('content');
var ajax = new XMLHttpRequest();

function chargeEvents() {
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && this.status == 200) {
		    content.innerHTML = this.responseText;
		}
	};
	ajax.open('get', '../php/ajax/search-hot.php');
	ajax.send();
}
window.addEventListener('load', chargeEvents(), false);