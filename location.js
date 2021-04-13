$(document).ready(function(){
    //check if location is not NULL
    if (navigator.geolocation)
    {
        // get location
        navigator.geolocation.getCurrentPosition(function(position)
        {
            console.log(position);

            // print map
            var img = new Image();
            img.src = "https://maps.googleapis.com/maps/api/staticmap?center="+ position.coords.latitude + "," + position.coords.longitude + "&zoom=14&size=400x300&sensor=false";
            $('#output').html(img);
        })
    }
    else
    {
        console.log("Geolaction unavalible")
    }
})