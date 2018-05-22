//modals.js
// Created by: Juan Guzmán - Fluxer Founder & CEO

/* HOW TO USE */
/* First thing you should to know is that 
this is a library for modals by Fluxer, and it works like these:

  1) You index the modals.js scripts for have to-hand
  all our library

  2) Create the script wich will call to one of this two functions:

     modal_show - To show the modal
     modal_hide - To hide the modal

  3) The above two functions receive a parameter called 'modal_element', it´s
  the modal's element, the object (or element) wich calls this function triggers
  the modal trought a event like click or mouseover

   */

function show_modal(modal_element) {
 	
 	modal_element.style.display='block';
 }
 function hide_modal(modal_element) {
 	
 	modal_element.style.display='none';

 }