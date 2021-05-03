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

 //Push notification
 /* value in Notification.permission can be: default, granted or denied. */


