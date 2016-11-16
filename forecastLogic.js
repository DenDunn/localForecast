/**
 * Created by deni on 06.11.2016.
 */

/*
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
* I need from here: json.weather[0].id -> draw the icon for the weather
*                   json.weather[0].description -> sigh the icon italic
*                   json.main.temp -> temperature
*                   json.name -> city's name
*                   json.sys.country -> country code
* */

$(document).ready(function(){
    //loading icons mapping between openweathermap and weather icon provided by owm-icons.json
    var icon_map = (function() {
        var json = null;
        $.ajax({
            'async': false,
            'global': false,
            'dataType': "json",
            'url': './owm-icons.json',
            'success': function(data) {
                json = data;
            }
        });
        return json;
    })();

    //grab location
    var position = (function getMyLocation () {
        if (navigator.geolocation){
            // call getCurrentPosition() and send returned data to callback function getLocalWeather()
            navigator.geolocation.getCurrentPosition(getLocalWeather);
        } else {
            $("#show").html("'navigator.geolocation' does not supported.");
        }
    })();

    function getLocalWeather(position){
        $("#show").html("longitude: " + position.coords.longitude + "; latitude: " + position.coords.latitude);//debug
        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude +'&lon='+ position.coords.longitude +'&APPID=3eb66f7f859ef68a4d68ee954a1f6c78&units=metric&lang=en',
            cached: false,
            dataType: 'json',
            success: function(resp) {
                $("#show3").html(JSON.stringify(resp.weather[0].id));
            }
        });
    }


    //debug
    $("#show2").html(JSON.stringify(icon_map[200].icon));

})
