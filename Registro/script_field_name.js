function change_address() {
    this.text = document.getElementById( 'texto_campo' );
    text.style.visibility = 'visible';
    text.style.left = '43%';
    text.innerHTML = 'Dirección';
}

function out() {
    var change_address_object = new change_address();
    change_address_object.text.style.visibility = 'hidden';
    change_address_object.text.style.left = '0%';
}

function change_username() {
    var change_address_object = new change_address();
    change_address_object.text.innerHTML = 'Nombre de Usuario';
    change_address_object.text.style.visibility = 'visible';
    change_address_object.text.style.left = '37%';
}

function change_email() {
    var change_address_object = new change_address();
    change_address_object.text.innerHTML = 'Email';
    change_address_object.text.style.visibility = 'visible';
    change_address_object.text.style.left = '45%';
}

function change_password() {
    var change_address_object = new change_address();
    change_address_object.text.innerHTML = 'Contraseña';
    change_address_object.text.style.visibility = 'visible';
    change_address_object.text.style.left = '41%';
}

function change_confirm() {
    var change_address_object = new change_address();
    change_address_object.text.innerHTML = 'Confírmala';
    change_address_object.text.style.visibility = 'visible';
    change_address_object.text.style.left = '42%';
}
