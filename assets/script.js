//query selectors
var inputForm = document.getElementById("searchBtn");
var userInput = document.querySelector("#searchInput");
var previousResults = document.getElementById("previousResults")
var apiKey = "4705ede2b4f7a66fbc8aa6f1db5c3438"
var requestUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput.value + "&appid=" + apiKey


//function to search based on user input
function citySearchInput(event) {
    event.preventDefault();

    var searchInputVal = document.getElementById("searchInput").value;

    if (!searchInputVal) {
        alert("Please enter the name of a city");
        return;
    }
    getResults();
}

//generate current day weather
fetch(requestUrl)
.then(function (response) {
    console.log(response)
    return response.json();
})
.then(function(data){
    console.log(data)
    var lon = data.coord.lon
    var lat = data.coord.lat
    var secondApi = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude={part}&appid=" + apiKey
})

function getResults() {
    fetch(requestUrl)
    .then(function (response) {
        console.log(response)
        return response.json();
    })
    .then(function(data){
        console.log(data)
    })
}
//generate 5 day forecast

//event listener for search button
inputForm.addEventListener("click", citySearchInput, storeResults);

//store previous searches
function storeResults() {
    var cityName = localStorage.getItem(userInput.value);
    cityName.document.append(previousResults);
    localStorage.setItem("userSearch", cityName);
}


// 4705ede2b4f7a66fbc8aa6f1db5c3438

document.getElementById("temp").innerHTML += ""