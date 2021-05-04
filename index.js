//code for setting up Semantic UI's accordian
$(document).ready(function(){
    $('.ui.accordion').accordion();
 });


 // make sure Window is loaded
 $(document).ready(function(){

    //code for switching background image
    document.getElementById("switchBlue").addEventListener("click", blueBackground);
    document.getElementById("switchGold").addEventListener("click", goldBackground);

 })

 function blueBackground()
 {
    document.getElementById("fixed-background").style.backgroundColor = "blue";
     document.getElementById("fixed-background").style.backgroundImage= "url('lightblue.jpg')";
     //console.log("switch blue")
 }

 function goldBackground()
 {
    document.getElementById("fixed-background").style.backgroundColor = "yellow";
      document.getElementById("fixed-background").style.backgroundImage = "url('lightgold.jpg')";
    // console.log("switch gold")
 }

 /*EXTRA RESEARCHED DONE AT https://developers.google.com/ */

 
 if ('serviceWorker' in navigator) {
   navigator.serviceWorker
     .register('service-worker.js')
     .then(() => { console.log('Service Worker Registered'); });
 }

// Initialize deferredPrompt for use later to show browser install prompt.
let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});
 