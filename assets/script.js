var APIKey = "cea9302e7a25d1a9698cd6b022d8b9f7";

let city = $("#cityInput").val();

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey;

var currentCity = $("#currentCityResponse");
var currentDate = $("#currentDateResponse");
var currentImage = $("#currentImageResponse");
var currentTemp = $("#currentTempResponse");
var currentWind = $("#currentWindResponse");
var currentHumidity = $("#currentHumidityResponse");
var currentUV = $("#currentUVResponse");

var forecastDate0 = $("#forecastDate0Response");
var forecastImage0 = $("#forecastImage0Response");
var forecastTemp0 = $("#forecastTemp0Response");
var forecastWind0 = $("#forecastWind0Response");
var forecastHumidity0 = $("#forecastHumidity0Response");

var forecastDate1 = $("#forecastDate1Response");
var forecastImage1 = $("#forecastImage1Response");
var forecastTemp1 = $("#forecastTemp1Response");
var forecastWind1 = $("#forecastWind1Response");
var forecastHumidity1 = $("#forecastHumidity1Response");

var forecastDate2 = $("#forecastDate2Response");
var forecastImage2 = $("#forecastImage2Response");
var forecastTemp2 = $("#forecastTemp2Response");
var forecastWind2 = $("#forecastWind2Response");
var forecastHumidity2 = $("#forecastHumidity2Response");

var forecastDate3 = $("#forecastDate3Response");
var forecastImage3 = $("#forecastImage3Response");
var forecastTemp3 = $("#forecastTemp3Response");
var forecastWind3 = $("#forecastWind3Response");
var forecastHumidity3 = $("#forecastHumidity3Response");

var forecastDate4 = $("#forecastDate4Response");
var forecastImage4 = $("#forecastImage4Response");
var forecastTemp4 = $("#forecastTemp4Response");
var forecastWind4 = $("#forecastWind4Response");
var forecastHumidity4 = $("#forecastHumidity4Response");

$("#searchBtn").click(function (event){
    event.preventDefault();
    function callWeather(){

        currentCity.empty();
        currentDate.empty();
        currentImage.empty();
        currentTemp.empty();
        currentWind.empty();
        currentHumidity.empty();
        currentUV.empty();

        forecastDate0.empty();
        forecastImage0.empty();
        forecastTemp0.empty();
        forecastWind0.empty();
        forecastHumidity0.empty();

        forecastDate1.empty();
        forecastImage1.empty();
        forecastTemp1.empty();
        forecastWind1.empty();
        forecastHumidity1.empty();

        forecastDate2.empty();
        forecastImage2.empty();
        forecastTemp2.empty();
        forecastWind2.empty();
        forecastHumidity2.empty();

        forecastDate3.empty();
        forecastImage3.empty();
        forecastTemp3.empty();
        forecastWind3.empty();
        forecastHumidity3.empty();

        forecastDate4.empty();
        forecastImage4.empty();
        forecastTemp4.empty();
        forecastWind4.empty();
        forecastHumidity4.empty();


        city = $("#cityInput").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city + "&appid=" + APIKey;

        $.ajax({
            url : queryURL,
            method:"Get"
        }).then(function (response){
            $("#currentCityResponse").append(response.name);
            var lat = (response.coord.lat);
            var long = (response.coord.lon);
            var forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&appid=" +APIKey;
            $.ajax({
                url : forecastURL,
                method: "Get"
            }).then(function(response){
                console.log(response);

            $("#currentDateResponse").append(response.current.dt, "UTC");
            $("#currentImageResponse").append(response.current.weather[0].main);
            $("#currentTempResponse").append(response.current.temp, "K");
            $("#currentWindResponse").append(response.current.wind_speed, "MPH");
            $("#currentHumidityResponse").append(response.current.humidity, "%");
            $("#currentUVResponse").append(response.current.uvi);
            
            $("#forecastDate0Response").append(response.daily[0].dt, "UTC");
            $("#forecastImage0Response").append(response.daily[0].weather[0].main);
            $("#forecastTemp0Response").append(response.daily[0].temp.day, "K");
            $("#forecastWind0Response").append(response.daily[0].wind_gust);
            $("#forecastHumidity0Response").append(response.daily[0].humidity);

            $("#forecastDate1Response").append(response.daily[1].dt, "UTC");
            $("#forecastImage1Response").append(response.daily[1].weather[0].main);
            $("#forecastTemp1Response").append(response.daily[1].temp.day, "K");
            $("#forecastWind1Response").append(response.daily[1].wind_gust);
            $("#forecastHumidity1Response").append(response.daily[1].humidity);

            $("#forecastDate2Response").append(response.daily[2].dt, "UTC");
            $("#forecastImage2Response").append(response.daily[2].weather[0].main);
            $("#forecastTemp2Response").append(response.daily[2].temp.day, "K");
            $("#forecastWind2Response").append(response.daily[2].wind_gust);
            $("#forecastHumidity2Response").append(response.daily[2].humidity);

            $("#forecastDate3Response").append(response.daily[3].dt, "UTC");
            $("#forecastImage3Response").append(response.daily[3].weather[0].main);
            $("#forecastTemp3Response").append(response.daily[3].temp.day, "K");
            $("#forecastWind3Response").append(response.daily[3].wind_gust);
            $("#forecastHumidity3Response").append(response.daily[3].humidity);

            $("#forecastDate4Response").append(response.daily[4].dt, "UTC");
            $("#forecastImage4Response").append(response.daily[4].weather[0].main);
            $("#forecastTemp4Response").append(response.daily[4].temp.day, "K");
            $("#forecastWind4Response").append(response.daily[4].wind_gust);
            $("#forecastHumidity4Response").append(response.daily[4].humidity);
                
                
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
  localStorage.setItem("searchhistory", JSON.stringify(searchHistorylist));
   $("ul").append(searchHistorylist);
   $("#cityInput").val("");
}
