// Store your OpenWeatherMap API key.
const apiKey = "28b520d1d57a53475e975f6deecad3be";

const weatherData = document.getElementById("weatherdata");


// Fetch the XML from the API
async function getWeather(city) {

    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&mode=xml&appid=${apiKey}`
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.text();
}


// First button: display raw XML
document.getElementById("fetchRaw").addEventListener("click", async function() {

    try {

        weatherData.textContent = "Loading weather data...";

        const xmlText = await getWeather("Helsinki");

        weatherData.textContent = xmlText;

    } catch (error) {

        weatherData.textContent = "Error fetching weather data.";
        console.error(error);
    }
});


// Fetch and parse weather
async function fetchWeatherData(city) {

    try {

        weatherData.textContent = "Loading weather data...";

        const xmlText = await getWeather(city);

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "text/xml");

        const temperature =
            xmlDoc.querySelector("temperature").getAttribute("value");

        const humidity =
            xmlDoc.querySelector("humidity").getAttribute("value");

        const clouds =
            xmlDoc.querySelector("clouds").getAttribute("value");

        weatherData.innerHTML = `
            <h3>${city}</h3>
            <p>Temperature: ${temperature} °C</p>
            <p>Humidity: ${humidity}%</p>
            <p>Cloudiness: ${clouds}%</p>
        `;

    } catch (error) {

        weatherData.textContent = "Error fetching weather data.";
        console.error(error);
    }
}


// Second Fetch data button
document.getElementById("fetchWeather").addEventListener("click", function() {

    const city = document.getElementById("city").value;

    fetchWeatherData(city);
});


// Dropdown
document.getElementById("city").addEventListener("change", function() {

    const city = document.getElementById("city").value;

    fetchWeatherData(city);
});


// Search
document.getElementById("search").addEventListener("click", function() {

    const city = document.getElementById("citysearch").value.trim();

    if (city === "") {
        weatherData.textContent = "Please enter a city.";
        return;
    }

    fetchWeatherData(city);
});