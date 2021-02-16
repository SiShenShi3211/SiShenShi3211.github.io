// Start of Jquery file
$(document).ready(function() {
    
    // when the animation button is pressed....
   $("#animButton").click(function(){
       
       $(".titleH1").animate({
           
           fontSize: '70px',
          
           
       }, 2000);
       
       
       
       $(".titleH1").animate({
           
           fontSize: '33px',
          
           
       }, 2000);
       
        $(".titleH1").css("color","red")
       $("#William-Photo").css("border","solid 4px blue")
       
       
       
   });
    
});