//code for setting up Semantic UI's accordian
$(document).ready(function(){
    $('.ui.accordion').accordion();
 });


 /*EXTRA RESEARCHED DONE AT https://developers.google.com/ */

 
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker
     .register('service-worker.js')
     .then(() => { console.log('Service Worker Registered'); });
 }


 