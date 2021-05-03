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

 // Make service worker work even if offline
if ('serviceWorker' in navigator) {
   navigator.serviceWorker
     .register('service-worker.js')
     .then(() => { console.log('Service Worker Registered'); });
 }

 $(document).ready(function(){
   // desktop install prompt
   let deferredPrompt;
   const addBtn = document.querySelector('.add-button');
   addBtn.style.display = 'none';
 })

 var deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
   deferredPrompt = e; 
   showAddToHomeScreen();
   console.log("beforeinstallprompt is running")
   // // Prevent Chrome 67 and earlier from automatically showing the prompt
   // e.preventDefault();
   // // Stash the event so it can be triggered later.
   // deferredPrompt = e;
   // // Update UI to notify the user they can add to home screen
   // addBtn.style.display = 'block';
 
   // addBtn.addEventListener('click', () => {
   //   // hide our user interface that shows our A2HS button
   //   addBtn.style.display = 'none';
   //   // Show the prompt
   //   deferredPrompt.prompt();
   //   // Wait for the user to respond to the prompt
   //   deferredPrompt.userChoice.then((choiceResult) => {
   //     if (choiceResult.outcome === 'accepted') {
   //       console.log('User accepted the A2HS prompt');
   //     } else {
   //       console.log('User dismissed the A2HS prompt');
   //     }
   //     deferredPrompt = null;
   //   });
   // });
 });
 
 function showAddToHomeScreen() { var a2hsBtn = document.querySelector(".add-button"); a2hsBtn.style.display = "block"; a2hsBtn.addEventListener("click", addToHomeScreen); }

 function addToHomeScreen() { var a2hsBtn = document.querySelector(".ad2hs-prompt"); 
 // hide our user interface that shows our A2HS button 
 a2hsBtn.style.display = 'none'; 
 // Show the prompt 
 deferredPrompt.prompt(); 
 // Wait for the user to respond to the prompt 
 deferredPrompt.userChoice .then(function(choiceResult){ 
    if (choiceResult.outcome === 'accepted') {
       console.log('User accepted the A2HS prompt'); 
      } else { 
         console.log('User dismissed the A2HS prompt'); 
      } deferredPrompt = null; }); }
