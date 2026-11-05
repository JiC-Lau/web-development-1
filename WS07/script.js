//!--Exercise 1
var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var data = JSON.parse(text);

function showNames() {
    var output = " ";
    for (var i = 0; i < data.employees.length; i++) {
        output += data.employees[i].firstName + " " + data.employees[i].lastName + "<br>";
    }
    document.getElementById("jsondata").innerHTML = output;
}

function showAll() {
    var output = " ";       
    for (var i = 0; i < data.employees.length; i++) {
        output += "First Name: " + data.employees[i].firstName + "<br>";
        output += "Last Name: " + data.employees[i].lastName + "<br><br>";
    }
    document.getElementById("jsondata").innerHTML = output;
}

//!--Exercise 2

function loadRawData() {

    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(function(response) {
            return response.text();
        })
        .then(function(data) {
            document.getElementById("rawdata").textContent = data;
        });

}

function loadParsedData() {
    fetch("http://www.omdbapi.com/?s=star+wars&apikey=cbbc6750")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            var table = "<table border='1'><tr><th>Title</th><th>Year</th><th>imdbID</th><th>poster</th></tr>";
            for (var i = 0; i < data.Search.length; i++) {
                table += "<tr><td>" + data.Search[i].Title + "</td><td>" + data.Search[i].Year + "</td><td>" + data.Search[i].imdbID + "</td><td><img src='" + data.Search[i].Poster + "' alt='Poster'></td></tr>";
            }
            table += "</table>";
            document.getElementById("rawdata").innerHTML = table;
        });
}

//!--Exercise 3
var apiKey = "28b520d1d57a53475e975f6deecad3be";

function fetchWeatherData() {
    var city = document.getElementById("city").value;
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("weatherdata").textContent = "Loading weather data...";

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error("Request failed");
            }
            return response.json();
        })
        .then(function(data) {
            document.getElementById("weatherdata").innerHTML = `
                <h3>${data.name}</h3>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Clouds: ${data.clouds.all}%</p>
            `;
        })
        .catch(function(error) {
            console.error("Error fetching weather data:", error);
            document.getElementById("weatherdata").textContent = "Error fetching weather data.";
        });
}

document.getElementById("city").addEventListener("change", fetchWeatherData);

function searchWeatherData() {
    var city = document.getElementById("citysearch").value;
    if (city) {
        var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        document.getElementById("weatherdata").textContent = "Loading weather data...";
        fetch(url)
            .then(function(response) {
                if (!response.ok) {
                    throw new Error("Request failed");
                }
                return response.json();
            })
            .then(function(data) {
                document.getElementById("weatherdata").innerHTML = `
                    <h3>${data.name}</h3>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Clouds: ${data.clouds.all}%</p>
                `;
            })
            .catch(function(error) {
                console.error("Error fetching weather data:", error);
                document.getElementById("weatherdata").textContent = "Error fetching weather data.";
            });
    }
}
