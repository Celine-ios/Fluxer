function sendRequest() {
	var ajax = new XMLHttpRequest();
	ajax.onreadystatechange = function() {
		if(ajax.readyState == 4 && this.status == 200) {
			document.getElementById('animation-holder').innerHTML = this.responseText;
		}
	}; 
	ajax.open('get','../animations/contactanos/index.html', true);
	ajax.send();
}
window.addEventListener('load', sendRequest(), false);