var APIKey = "cea9302e7a25d1a9698cd6b022d8b9f7";

let city = $("#cityInput").val();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey;

$("#searchBtn").click(function (event){
    event.preventDefault();
    function callWeather(){
        city = $("#cityInput").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey;

        $.ajax({
            url : queryURL,
            method:"Get"
        }).then(function (response){
            $("#currentCity").append(response.name);
            var lat = (response.coord.lat);
            var long = (response.coord.lon);
            var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" +APIKey;
            $.ajax({
                url : forecastURL,
                method: "Get"
            }).then(function(response){
                console.log(response);

            $("#currentDate").append(response.current.dt);
            $("#currentImage").append(response.current.weather[0].main);
            $("#currentTemp").append(response.current.temp, "K");
            $("#currentWind").append(response.current.wind_speed, "MPH");
            $("#currentHumidity").append(response.current.humidity, "%");
            $("#currentUV").append(response.current.uvi);

            $("#forecastDate0").append(response.daily[0].dt);
            $("#forecastImage0").append(response.daily[0].weather[0].main);
            $("#forecastTemp0").append(response.daily[0].temp.day, "K");
            $("#forecastWind0").append(response.daily[0].wind_gust);
            $("#forecastHumidity0").append(response.daily[0].humidity);

            $("#forecastDate1").append(response.daily[1].dt);
            $("#forecastImage1").append(response.daily[1].weather[0].main);
            $("#forecastTemp1").append(response.daily[1].temp.day, "K");
            $("#forecastWind1").append(response.daily[1].wind_gust);
            $("#forecastHumidity1").append(response.daily[1].humidity);

            $("#forecastDate2").append(response.daily[2].dt);
            $("#forecastImage2").append(response.daily[2].weather[0].main);
            $("#forecastTemp2").append(response.daily[2].temp.day, "K");
            $("#forecastWind2").append(response.daily[2].wind_gust);
            $("#forecastHumidity2").append(response.daily[2].humidity);

            $("#forecastDate3").append(response.daily[3].dt);
            $("#forecastImage3").append(response.daily[3].weather[0].main);
            $("#forecastTemp3").append(response.daily[3].temp.day, "K");
            $("#forecastWind3").append(response.daily[3].wind_gust);
            $("#forecastHumidity3").append(response.daily[3].humidity);

            $("#forecastDate4").append(response.daily[4].dt);
            $("#forecastImage4").append(response.daily[4].weather[0].main);
            $("#forecastTemp4").append(response.daily[4].temp.day, "K");
            $("#forecastWind4").append(response.daily[4].wind_gust);
            $("#forecastHumidity4").append(response.daily[4].humidity);
                
                
            })
            
        })
        
    }
    
    callWeather();
    search()
});



function search() {
  var searchHistorylist = $("<button>");
  searchHistorylist.addClass("list-group-item-action");
  searchHistorylist.text(city);
   $("ul").append(searchHistorylist);
   $("#cityInput").val("");
}
