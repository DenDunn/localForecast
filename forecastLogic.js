/**
 * Created by deni on 06.11.2016.
 */

/*
* request: http://api.openweathermap.org/data/2.5/weather?lat=55.7702012&lon=37.6024752&APPID=%putYourKeyHere%
*
* replay format:
* {"coord":{"lon":37.61,"lat":55.76},
* "weather":[{"id":621,"main":"Snow","description":"shower snow","icon":"13n"}],
* "base":"stations",
* "main":{"temp":269.9,"pressure":1012,"humidity":92,"temp_min":269.15,"temp_max":270.15},
* "visibility":1300,
* "wind":{"speed":7,"deg":90},
* "clouds":{"all":75},
* "dt":1478449800,
* "sys":{"type":1,"id":7323,"message":0.1219,"country":"RU","sunrise":1478407694,"sunset":1478439444}
* ,"id":524894,
* "name":"Moskva",
* "cod":200}
* */

$(document).ready(function(){
    function getMyLocation () {
        if (navigator.geolocation){
            // call getCurrentPosition() 
            navigator.geolocation.getCurrentPosition(viewOnPage);
        } else {
            $("#show").html("'navigator.geolocation' does not supported.");
        }
    }

    function viewOnPage(position){
        $("#show").html("longitude: " + position.coords.longitude + "; latitude: " + position.coords.latitude);
    }

    getMyLocation();
})
