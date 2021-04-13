$(document).ready(function(){
    //check if location is not NULL
    if (navigator.geolocation)
    {
        // get location
        navigator.geolocation.getCurrentPosition(function(position)
        {
            console.log(position);
            
            var img_url="http://maps.googleapis.com/maps/api/staticmap?center="+ position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x300&sensor=false&key=AIzaSyBrD1XvrVlEpngcUlVrkVbkwH00UZYhj58";
           
            
            document.getElementById("map-holder").innerHTML = "<img src='"+img_url+"'>";
        })
    }
    else
    {
        console.log("Geolaction unavalible")
    }
})